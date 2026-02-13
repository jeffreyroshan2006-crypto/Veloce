'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Premium WebGL Background
 * 
 * A stunning, interactive background with flowing mesh gradients,
 * morphing blobs, and particle trails that follow the mouse.
 * Inspired by premium agency sites and award-winning web experiences.
 */

// ============================================
// FALLBACK GRADIENT COMPONENT
// ============================================
function FallbackGradient() {
  return (
    <div 
      className="fixed inset-0 -z-10 w-full h-full"
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(0, 127, 255, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
          linear-gradient(180deg, #050508 0%, #0a0a12 50%, #050508 100%)
        `
      }}
    />
  );
}

// ============================================
// MAIN WEBGL BACKGROUND COMPONENT
// ============================================
export function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    if (!containerRef.current) return;

    // ============================================
    // SCENE SETUP
    // ============================================
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      100
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050508, 1);
    containerRef.current.appendChild(renderer.domElement);

    // ============================================
    // FLOWING MESH GRADIENT - Full screen shader
    // ============================================
    const gradientGeometry = new THREE.PlaneGeometry(4, 4, 1, 1);
    
    const gradientMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uResolution;
        varying vec2 vUv;
        
        // Simplex noise
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
        
        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                             -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m*m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
          vec3 g;
          g.x = a0.x * x0.x + h.x * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }
        
        // Fractal Brownian Motion
        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 1.0;
          for (int i = 0; i < 6; i++) {
            value += amplitude * snoise(p * frequency);
            amplitude *= 0.5;
            frequency *= 2.0;
          }
          return value;
        }
        
        void main() {
          vec2 uv = vUv;
          vec2 mouse = uMouse * 0.5 + 0.5;
          float time = uTime * 0.15;
          
          // Create flowing distortion
          vec2 q = vec2(0.0);
          q.x = fbm(uv + time * 0.3);
          q.y = fbm(uv + vec2(1.0));
          
          vec2 r = vec2(0.0);
          r.x = fbm(uv + 1.0 * q + vec2(1.7, 9.2) + 0.15 * time);
          r.y = fbm(uv + 1.0 * q + vec2(8.3, 2.8) + 0.126 * time);
          
          float f = fbm(uv + r);
          
          // Color palette - deep blues, purples, and brand blue
          vec3 color1 = vec3(0.02, 0.02, 0.04);    // Near black
          vec3 color2 = vec3(0.0, 0.5, 1.0);        // Brand blue
          vec3 color3 = vec3(0.39, 0.4, 0.95);      // Purple/indigo
          vec3 color4 = vec3(0.0, 0.8, 0.85);       // Cyan
          
          // Mix colors based on noise
          vec3 color = mix(color1, color2, clamp(f * f * 2.0, 0.0, 1.0));
          color = mix(color, color3, clamp(length(q), 0.0, 1.0) * 0.3);
          color = mix(color, color4, clamp(length(r.x), 0.0, 1.0) * 0.2);
          
          // Mouse interaction - subtle glow
          float mouseDist = length(uv - mouse);
          float mouseGlow = smoothstep(0.6, 0.0, mouseDist) * 0.15;
          color += vec3(0.0, 0.4, 0.8) * mouseGlow;
          
          // Vignette
          float vignette = 1.0 - smoothstep(0.2, 0.9, length(uv - 0.5));
          color *= vignette * 0.7 + 0.3;
          
          // Subtle grain
          float grain = fract(sin(dot(uv * 500.0, vec2(12.9898, 78.233))) * 43758.5453);
          color += grain * 0.015;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const gradientMesh = new THREE.Mesh(gradientGeometry, gradientMaterial);
    gradientMesh.position.z = -2;
    scene.add(gradientMesh);

    // ============================================
    // FLOATING BLOBS - Morphing spheres
    // ============================================
    const blobs: THREE.Mesh[] = [];
    
    for (let i = 0; i < 4; i++) {
      const blobGeometry = new THREE.SphereGeometry(0.3 + Math.random() * 0.2, 32, 32);
      const blobMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor1: { value: new THREE.Color(i % 2 === 0 ? 0x007FFF : 0x6366F1) },
          uColor2: { value: new THREE.Color(i % 2 === 0 ? 0x00CED1 : 0x8B5CF6) }
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          varying vec2 vUv;
          uniform float uTime;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            vUv = uv;
            
            // Morph the sphere
            vec3 pos = position;
            float displacement = sin(pos.x * 3.0 + uTime) * sin(pos.y * 3.0 + uTime) * 0.1;
            pos += normal * displacement;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          varying vec3 vNormal;
          varying vec3 vPosition;
          varying vec2 vUv;
          
          void main() {
            // Fresnel effect for glass-like appearance
            vec3 viewDir = normalize(cameraPosition - vPosition);
            float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 3.0);
            
            // Gradient color
            vec3 color = mix(uColor1, uColor2, vUv.y + sin(uTime * 0.5) * 0.2);
            
            // Add glow
            float glow = fresnel * 1.5;
            color *= glow + 0.3;
            
            float alpha = fresnel * 0.6 + 0.1;
            
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      
      const blob = new THREE.Mesh(blobGeometry, blobMaterial);
      blob.position.set(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 1.5,
        (Math.random() - 0.5) * 0.5 - 0.5
      );
      blob.userData = {
        basePos: blob.position.clone(),
        speed: 0.3 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.5
      };
      blobs.push(blob);
      scene.add(blob);
    }

    // ============================================
    // PARTICLE TRAILS - Following mouse
    // ============================================
    const particleCount = 100;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = 0;
      particlePositions[i * 3 + 1] = 0;
      particlePositions[i * 3 + 2] = 0;
      particleSizes[i] = Math.random() * 3 + 1;
    }
    
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('aSize', new THREE.BufferAttribute(particleSizes, 1));
    
    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
      },
      vertexShader: `
        attribute float aSize;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vAlpha;
        
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = aSize * uPixelRatio * (100.0 / -mvPosition.z);
          vAlpha = smoothstep(0.0, 0.5, aSize / 4.0);
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.0, dist) * vAlpha * 0.5;
          vec3 color = vec3(0.0, 0.5, 1.0);
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    // Store particle history for trail effect
    const particleHistory: { x: number; y: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      particleHistory.push({ x: 0, y: 0 });
    }

    // ============================================
    // EVENT HANDLERS
    // ============================================
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      gradientMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      particleMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // ============================================
    // ANIMATION LOOP
    // ============================================
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
      
      // Update gradient
      gradientMaterial.uniforms.uTime.value = elapsedTime;
      gradientMaterial.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      
      // Update blobs
      blobs.forEach((blob) => {
        const userData = blob.userData;
        blob.position.x = userData.basePos.x + Math.sin(elapsedTime * userData.speed + userData.offset) * 0.3;
        blob.position.y = userData.basePos.y + Math.cos(elapsedTime * userData.speed * 0.7 + userData.offset) * 0.2;
        blob.rotation.x += userData.rotSpeed * 0.01;
        blob.rotation.y += userData.rotSpeed * 0.01;
        (blob.material as THREE.ShaderMaterial).uniforms.uTime.value = elapsedTime;
      });
      
      // Update particle trail
      const positions = particleGeometry.attributes.position.array as Float32Array;
      
      // Shift all particles
      for (let i = particleCount - 1; i > 0; i--) {
        particleHistory[i].x = particleHistory[i - 1].x;
        particleHistory[i].y = particleHistory[i - 1].y;
      }
      
      // Add new position at mouse
      particleHistory[0].x = mouseRef.current.x * 1.5;
      particleHistory[0].y = mouseRef.current.y * 1.5;
      
      // Update buffer
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = particleHistory[i].x;
        positions[i * 3 + 1] = particleHistory[i].y;
        positions[i * 3 + 2] = -0.5 + (i / particleCount) * 0.3;
      }
      
      particleGeometry.attributes.position.needsUpdate = true;
      particleMaterial.uniforms.uTime.value = elapsedTime;
      
      renderer.render(scene, camera);
    };

    animate();

    // ============================================
    // CLEANUP
    // ============================================
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      gradientGeometry.dispose();
      gradientMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      
      blobs.forEach(blob => {
        (blob.geometry as THREE.BufferGeometry).dispose();
        (blob.material as THREE.Material).dispose();
      });
      
      renderer.dispose();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webglSupported) {
    return <FallbackGradient />;
  }

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ background: '#050508' }}
    />
  );
}
