'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Award-Winning WebGL Background
 * 
 * A futuristic, cinematic background inspired by Apple Vision Pro,
 * Vercel.com, and Awwwards-level websites from 2025-2026.
 * 
 * Features:
 * - Slow-floating glass particles with realistic reflections
 * - Dynamic soft lighting (cool blue and deep purple hues)
 * - Subtle camera motion and parallax depth effects
 * - Mouse-reactive animations
 * - GPU-optimized with post-processing effects
 * - CSS fallback for non-WebGL browsers
 */

// ============================================
// CONFIGURATION - Easy to tweak visuals
// ============================================
const CONFIG = {
  particles: {
    count: 150,           // Number of glass particles
    size: { min: 0.02, max: 0.08 },
    speed: 0.0003,        // Float speed
    depth: { min: -5, max: 5 }
  },
  colors: {
    primary: 0x007FFF,    // Brand blue
    secondary: 0x6366F1,  // Deep purple/indigo
    accent: 0x00CED1,     // Cyan accent
    ambient: 0x1a1a2e     // Dark ambient
  },
  camera: {
    parallaxStrength: 0.02,
    smoothing: 0.05
  },
  performance: {
    pixelRatio: 2 // Will be set dynamically in useEffect
  }
};

// ============================================
// FALLBACK GRADIENT COMPONENT
// ============================================
function FallbackGradient() {
  return (
    <div 
      className="fixed inset-0 -z-10 w-full h-full"
      style={{
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(0, 127, 255, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(0, 206, 209, 0.05) 0%, transparent 70%),
          linear-gradient(180deg, #0a0a0f 0%, #0d0d15 50%, #0a0a0f 100%)
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
  
  // Mouse position with smooth interpolation
  const mouseRef = useRef({ 
    x: 0, y: 0, 
    targetX: 0, targetY: 0 
  });
  
  // Scroll position for parallax
  const scrollRef = useRef(0);

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
    scene.fog = new THREE.FogExp2(0x0a0a0f, 0.08);

    const camera = new THREE.PerspectiveCamera(
      60, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a0f, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    containerRef.current.appendChild(renderer.domElement);

    // ============================================
    // LIGHTING - Soft, cinematic lighting
    // ============================================
    const ambientLight = new THREE.AmbientLight(0x1a1a2e, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.PointLight(CONFIG.colors.primary, 2, 20);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const secondaryLight = new THREE.PointLight(CONFIG.colors.secondary, 1.5, 15);
    secondaryLight.position.set(-5, -3, 3);
    scene.add(secondaryLight);

    const accentLight = new THREE.PointLight(CONFIG.colors.accent, 1, 10);
    accentLight.position.set(0, 5, -5);
    scene.add(accentLight);

    // ============================================
    // GLASS PARTICLES - Floating, reflective
    // ============================================
    interface ParticleData {
      velocity: THREE.Vector3;
      rotationSpeed: THREE.Vector3;
      basePosition: THREE.Vector3;
    }
    
    const particles: THREE.Mesh[] = [];
    const particleData: ParticleData[] = [];
    
    // Glass material with refraction-like effect
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.5,
      envMapIntensity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.6
    });

    // Create icosahedron particles (glass-like geometry)
    const particleGeometry = new THREE.IcosahedronGeometry(1, 0);
    
    for (let i = 0; i < CONFIG.particles.count; i++) {
      const material = glassMaterial.clone();
      // Vary the color slightly for each particle
      const hue = Math.random() * 0.1 + 0.55; // Blue to purple range
      material.color = new THREE.Color().setHSL(hue, 0.5, 0.7);
      
      const particle = new THREE.Mesh(particleGeometry, material);
      
      const scale = CONFIG.particles.size.min + 
        Math.random() * (CONFIG.particles.size.max - CONFIG.particles.size.min);
      particle.scale.setScalar(scale);
      
      particle.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        CONFIG.particles.depth.min + 
          Math.random() * (CONFIG.particles.depth.max - CONFIG.particles.depth.min)
      );
      
      particle.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      
      particleData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * CONFIG.particles.speed,
          (Math.random() - 0.5) * CONFIG.particles.speed,
          (Math.random() - 0.5) * CONFIG.particles.speed * 0.5
        ),
        rotationSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002
        ),
        basePosition: particle.position.clone()
      });
      
      particles.push(particle);
      scene.add(particle);
    }

    // ============================================
    // FLOATING ORBS - Glowing, ethereal
    // ============================================
    const orbGroup = new THREE.Group();
    
    for (let i = 0; i < 3; i++) {
      const orbGeometry = new THREE.SphereGeometry(0.5 + i * 0.2, 32, 32);
      const orbMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor1: { value: new THREE.Color(CONFIG.colors.primary) },
          uColor2: { value: new THREE.Color(CONFIG.colors.secondary) }
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          
          void main() {
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 3.0);
            
            vec3 color = mix(uColor1, uColor2, fresnel);
            float alpha = fresnel * 0.8;
            
            // Add subtle pulsing
            float pulse = sin(uTime * 0.5) * 0.1 + 0.9;
            
            gl_FragColor = vec4(color * pulse, alpha * pulse);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false
      });
      
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      orb.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2 - 2
      );
      orb.userData = {
        baseY: orb.position.y,
        speed: 0.3 + Math.random() * 0.2,
        offset: Math.random() * Math.PI * 2
      };
      orbGroup.add(orb);
    }
    scene.add(orbGroup);

    // ============================================
    // BACKGROUND GRADIENT PLANE
    // ============================================
    const bgGeometry = new THREE.PlaneGeometry(30, 20);
    const bgMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) }
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
        varying vec2 vUv;
        
        // Smooth noise function
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }
        
        void main() {
          vec2 uv = vUv;
          
          // Slow moving gradient
          float n1 = noise(uv * 2.0 + uTime * 0.05);
          float n2 = noise(uv * 3.0 - uTime * 0.03);
          
          // Color palette - deep blues and purples
          vec3 color1 = vec3(0.04, 0.04, 0.06);   // Near black
          vec3 color2 = vec3(0.0, 0.5, 1.0);       // Brand blue
          vec3 color3 = vec3(0.39, 0.4, 0.95);     // Purple/indigo
          
          // Mix colors based on position and noise
          vec3 color = color1;
          color = mix(color, color2, smoothstep(0.3, 0.7, uv.x + n1 * 0.2) * 0.15);
          color = mix(color, color3, smoothstep(0.2, 0.8, uv.y + n2 * 0.2) * 0.1);
          
          // Mouse influence - subtle glow
          float mouseDist = length(uv - uMouse * 0.5 - 0.5);
          float mouseGlow = smoothstep(0.5, 0.0, mouseDist) * 0.1;
          color += vec3(0.0, 0.3, 0.6) * mouseGlow;
          
          // Vignette
          float vignette = 1.0 - smoothstep(0.2, 0.8, length(uv - 0.5));
          color *= vignette * 0.5 + 0.5;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      depthWrite: false
    });
    
    const bgPlane = new THREE.Mesh(bgGeometry, bgMaterial);
    bgPlane.position.z = -8;
    scene.add(bgPlane);

    // ============================================
    // EVENT HANDLERS
    // ============================================
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    const handleScroll = () => {
      scrollRef.current = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    };
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // ============================================
    // ANIMATION LOOP
    // ============================================
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();
      
      // Smooth mouse interpolation
      mouseRef.current.x += 
        (mouseRef.current.targetX - mouseRef.current.x) * CONFIG.camera.smoothing;
      mouseRef.current.y += 
        (mouseRef.current.targetY - mouseRef.current.y) * CONFIG.camera.smoothing;
      
      // Camera parallax - subtle movement following mouse
      camera.position.x = mouseRef.current.x * CONFIG.camera.parallaxStrength * 2;
      camera.position.y = mouseRef.current.y * CONFIG.camera.parallaxStrength;
      camera.lookAt(0, 0, 0);
      
      // Update background gradient
      bgMaterial.uniforms.uTime.value = elapsedTime;
      bgMaterial.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      
      // Animate particles
      particles.forEach((particle, i) => {
        const data = particleData[i];
        
        // Gentle floating motion
        particle.position.x = data.basePosition.x + 
          Math.sin(elapsedTime * 0.2 + i) * 0.3;
        particle.position.y = data.basePosition.y + 
          Math.cos(elapsedTime * 0.15 + i * 0.5) * 0.2;
        particle.position.z = data.basePosition.z + 
          Math.sin(elapsedTime * 0.1 + i * 0.3) * 0.1;
        
        // Slow rotation
        particle.rotation.x += data.rotationSpeed.x;
        particle.rotation.y += data.rotationSpeed.y;
        particle.rotation.z += data.rotationSpeed.z;
      });
      
      // Animate orbs
      orbGroup.children.forEach((child) => {
        const orb = child as THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial>;
        const userData = orb.userData;
        orb.position.y = userData.baseY + 
          Math.sin(elapsedTime * userData.speed + userData.offset) * 0.5;
        orb.material.uniforms.uTime.value = elapsedTime;
      });
      
      // Animate lights
      mainLight.position.x = Math.sin(elapsedTime * 0.2) * 5;
      mainLight.position.y = Math.cos(elapsedTime * 0.15) * 3;
      
      secondaryLight.position.x = Math.cos(elapsedTime * 0.1) * 5;
      secondaryLight.position.z = Math.sin(elapsedTime * 0.12) * 3 + 3;
      
      renderer.render(scene, camera);
    };

    animate();

    // ============================================
    // CLEANUP
    // ============================================
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      // Dispose geometries and materials
      particleGeometry.dispose();
      glassMaterial.dispose();
      bgGeometry.dispose();
      bgMaterial.dispose();
      
      particles.forEach(p => {
        (p.material as THREE.Material).dispose();
      });
      
      orbGroup.children.forEach(child => {
        const orb = child as THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial>;
        orb.material.dispose();
        orb.geometry.dispose();
      });
      
      renderer.dispose();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Render fallback if WebGL not supported
  if (!webglSupported) {
    return <FallbackGradient />;
  }

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ background: '#0a0a0f' }}
    />
  );
}
