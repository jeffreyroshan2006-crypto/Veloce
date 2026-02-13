'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create flowing gradient mesh with custom shader
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
        
        // Simplex noise function
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
        
        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                             -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy));
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                                        + i.x + vec3(0.0, i1.x, 1.0));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                                  dot(x12.zw,x12.zw)), 0.0);
          m = m*m;
          m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }
        
        // Aurora effect
        float aurora(vec2 uv, float time) {
          float noise1 = snoise(uv * 2.0 + time * 0.1);
          float noise2 = snoise(uv * 3.0 - time * 0.15);
          float noise3 = snoise(uv * 1.5 + time * 0.08);
          
          float aurora = sin(uv.y * 3.0 + noise1 * 2.0 + time * 0.3) * 0.5 + 0.5;
          aurora += sin(uv.y * 2.0 + noise2 * 1.5 - time * 0.2) * 0.3;
          aurora += sin(uv.y * 4.0 + noise3 + time * 0.4) * 0.2;
          
          return aurora * 0.5;
        }
        
        void main() {
          vec2 uv = vUv;
          vec2 mouse = uMouse * 0.5 + 0.5;
          
          float time = uTime * 0.5;
          
          // Create flowing noise
          float noise1 = snoise(uv * 1.5 + time * 0.1);
          float noise2 = snoise(uv * 2.0 - time * 0.15);
          float noise3 = snoise(uv * 3.0 + time * 0.08);
          
          // Mouse influence
          float mouseDist = length(uv - mouse);
          float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.3;
          
          // Aurora waves
          float aurora1 = aurora(uv + vec2(time * 0.1, 0.0), time);
          float aurora2 = aurora(uv * 1.3 + vec2(0.0, time * 0.05), time * 0.8);
          
          // Color palette - deep blues, cyans, and subtle purples
          vec3 color1 = vec3(0.0, 0.5, 1.0);   // Brand blue
          vec3 color2 = vec3(0.0, 0.8, 0.9);   // Cyan
          vec3 color3 = vec3(0.1, 0.2, 0.4);   // Deep blue
          vec3 color4 = vec3(0.05, 0.1, 0.2);  // Dark blue
          
          // Mix colors based on noise and aurora
          vec3 finalColor = mix(color4, color3, smoothstep(-1.0, 1.0, noise1));
          finalColor = mix(finalColor, color2, aurora1 * 0.4);
          finalColor = mix(finalColor, color1, aurora2 * 0.3 + mouseInfluence);
          
          // Add subtle glow spots
          float glow = snoise(uv * 4.0 + time * 0.2) * 0.5 + 0.5;
          glow = pow(glow, 3.0) * 0.15;
          finalColor += vec3(0.0, 0.4, 0.8) * glow;
          
          // Vignette
          float vignette = 1.0 - smoothstep(0.3, 1.0, length(uv - 0.5) * 1.2);
          finalColor *= vignette * 0.8 + 0.2;
          
          // Subtle grain
          float grain = fract(sin(dot(uv * 1000.0, vec2(12.9898, 78.233))) * 43758.5453);
          finalColor += grain * 0.02;
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      transparent: false
    });

    const gradientMesh = new THREE.Mesh(gradientGeometry, gradientMaterial);
    scene.add(gradientMesh);

    // Floating orbs
    const orbs: THREE.Mesh[] = [];
    const orbGeometry = new THREE.SphereGeometry(1, 32, 32);
    
    for (let i = 0; i < 5; i++) {
      const orbMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new THREE.Color(i % 2 === 0 ? 0x007FFF : 0x00CED1) }
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform vec3 uColor;
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
            vec3 color = uColor * fresnel * 2.0;
            float alpha = fresnel * 0.5;
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });
      
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      orb.position.set(
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 0.5
      );
      orb.scale.setScalar(0.3 + Math.random() * 0.3);
      orb.userData = {
        speed: 0.2 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
        baseY: orb.position.y
      };
      orbs.push(orb);
      scene.add(orb);
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      gradientMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Smooth mouse following
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;
      
      // Update gradient
      gradientMaterial.uniforms.uTime.value = elapsedTime;
      gradientMaterial.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      
      // Animate orbs
      orbs.forEach((orb) => {
        orb.position.y = orb.userData.baseY + Math.sin(elapsedTime * orb.userData.speed + orb.userData.offset) * 0.3;
        orb.position.x += Math.sin(elapsedTime * 0.2 + orb.userData.offset) * 0.001;
        orb.rotation.y = elapsedTime * 0.1;
        (orb.material as THREE.ShaderMaterial).uniforms.uTime.value = elapsedTime;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      gradientGeometry.dispose();
      gradientMaterial.dispose();
      orbGeometry.dispose();
      orbs.forEach(orb => (orb.material as THREE.Material).dispose());
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
    />
  );
}
