'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Clouds, Cloud, Sky as SkyImpl } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function CloudScape() {
    const groupRef = useRef<THREE.Group>(null);
    const { pointer } = useThree();

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Gentle, slow drift to make it feel premium
            const baseRotationY = Math.cos(state.clock.elapsedTime * 0.05) * 0.1;
            const basePositionX = Math.sin(state.clock.elapsedTime * 0.05) * 2;

            // Interactive target positions based on mouse pointer
            // Pointer ranges from -1 to 1 on both axes
            const targetRotationX = (pointer.y * Math.PI) / 8; // Look up/down
            const targetRotationY = baseRotationY + (pointer.x * Math.PI) / 8; // Look left/right
            const targetPositionX = basePositionX + (pointer.x * 5); // Shift left/right
            const targetPositionY = (pointer.y * 5); // Shift up/down

            // Smooth interpolation (lerp) for premium feel
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, delta * 2);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, delta * 2);

            groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetPositionX, delta * 1.5);
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetPositionY, delta * 1.5);
        }
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={1.5} color="#ffffff" />
            <directionalLight position={[10, 20, 10]} intensity={2} color="#ffffff" />

            {/* 
        Premium Cloud Configuration
        Using a soft, translucent material setup for the clouds
        to blend elegantly with the bgveloce mountains.
      */}
            <Clouds material={THREE.MeshLambertMaterial} limit={400} range={50}>
                <Cloud
                    seed={1}
                    segments={40}
                    bounds={[20, 2, 2]}
                    volume={6}
                    color="#ffffff"
                    position={[0, 5, -10]}
                    opacity={0.3}
                    speed={0.1}
                />
                <Cloud
                    seed={2}
                    segments={40}
                    bounds={[30, 4, 4]}
                    volume={10}
                    color="#f0f4f8"
                    position={[-15, 0, -15]}
                    opacity={0.25}
                    speed={0.15}
                />
                <Cloud
                    seed={3}
                    segments={50}
                    bounds={[40, 6, 6]}
                    volume={12}
                    color="#ffffff"
                    position={[15, -2, -20]}
                    opacity={0.2}
                    speed={0.08}
                />
                {/* Adds depth up close */}
                <Cloud
                    seed={4}
                    segments={20}
                    bounds={[10, 2, 2]}
                    volume={5}
                    color="#e6ecef"
                    position={[5, -5, -5]}
                    opacity={0.15}
                    speed={0.2}
                />
            </Clouds>
        </group>
    );
}

export function InteractiveClouds() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-1000">
            {/* Fog effect at the bottom to blend with the background image mountains */}
            <div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-t from-black via-black/20 to-transparent z-20 pointer-events-none" />

            <Canvas
                camera={{ position: [0, 0, 15], fov: 60 }}
                gl={{ alpha: true, antialias: true }}
            >
                <CloudScape />
            </Canvas>
        </div>
    );
}
