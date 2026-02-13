'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    containerRef.current.appendChild(renderer.domElement);

    // Particle system with custom shader
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x007FFF); // Brand blue
    const color2 = new THREE.Color(0x00CED1); // Cyan
    const color3 = new THREE.Color(0xFF4500); // Orange accent

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Spherical distribution
      const radius = 20 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Velocity for animation
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

      // Color gradient
      const mixRatio = Math.random();
      const tempColor = new THREE.Color();
      if (mixRatio < 0.33) {
        tempColor.lerpColors(color1, color2, mixRatio * 3);
      } else if (mixRatio < 0.66) {
        tempColor.lerpColors(color2, color3, (mixRatio - 0.33) * 3);
      } else {
        tempColor.lerpColors(color3, color1, (mixRatio - 0.66) * 3);
      }
      
      colors[i3] = tempColor.r;
      colors[i3 + 1] = tempColor.g;
      colors[i3 + 2] = tempColor.b;

      sizes[i] = Math.random() * 2 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

    // Custom shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
      },
      vertexShader: `
        attribute vec3 aColor;
        attribute float aSize;
        
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uPixelRatio;
        
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vColor = aColor;
          
          vec3 pos = position;
          
          // Organic wave motion
          float wave = sin(pos.x * 0.1 + uTime * 0.5) * cos(pos.y * 0.1 + uTime * 0.3) * 2.0;
          pos.z += wave;
          
          // Mouse influence
          float dist = length(pos.xy - uMouse * 20.0);
          float influence = smoothstep(15.0, 0.0, dist);
          pos.z += influence * 5.0;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Size attenuation
          gl_PointSize = aSize * uPixelRatio * (300.0 / -mvPosition.z);
          
          // Alpha based on depth
          vAlpha = smoothstep(-50.0, 10.0, mvPosition.z) * 0.8;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          // Circular particle with soft edge
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.1, dist) * vAlpha;
          
          // Glow effect
          vec3 glow = vColor * (1.0 + smoothstep(0.3, 0.0, dist) * 0.5);
          
          gl_FragColor = vec4(glow, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Floating geometric shapes
    const shapes: THREE.Mesh[] = [];
    const shapeGeometries = [
      new THREE.IcosahedronGeometry(2, 0),
      new THREE.OctahedronGeometry(2, 0),
      new THREE.TetrahedronGeometry(2, 0)
    ];

    for (let i = 0; i < 15; i++) {
      const geo = shapeGeometries[Math.floor(Math.random() * shapeGeometries.length)];
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x007FFF : 0x00CED1,
        wireframe: true,
        transparent: true,
        opacity: 0.15
      });
      const mesh = new THREE.Mesh(geo, mat);
      
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        floatSpeed: Math.random() * 0.5 + 0.5,
        floatOffset: Math.random() * Math.PI * 2
      };
      
      shapes.push(mesh);
      scene.add(mesh);
    }

    // Connection lines between nearby particles
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(300 * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x007FFF,
      transparent: true,
      opacity: 0.1
    });
    
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Update uniforms
      material.uniforms.uTime.value = elapsedTime;
      material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      
      // Rotate particles
      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;
      
      // Animate shapes
      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        shape.position.y += Math.sin(elapsedTime * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.01;
      });
      
      // Update connection lines
      const posArray = geometry.attributes.position.array as Float32Array;
      const linePosArray = lines.geometry.attributes.position.array as Float32Array;
      let lineIndex = 0;
      
      for (let i = 0; i < Math.min(100, particleCount); i++) {
        const i3 = i * 3;
        for (let j = i + 1; j < Math.min(100, particleCount); j++) {
          const j3 = j * 3;
          const dx = posArray[i3] - posArray[j3];
          const dy = posArray[i3 + 1] - posArray[j3 + 1];
          const dz = posArray[i3 + 2] - posArray[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (dist < 8 && lineIndex < 300 * 6) {
            linePosArray[lineIndex++] = posArray[i3];
            linePosArray[lineIndex++] = posArray[i3 + 1];
            linePosArray[lineIndex++] = posArray[i3 + 2];
            linePosArray[lineIndex++] = posArray[j3];
            linePosArray[lineIndex++] = posArray[j3 + 1];
            linePosArray[lineIndex++] = posArray[j3 + 2];
          }
        }
      }
      
      lines.geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }}
    />
  );
}
