'use client'

import { Float, useGLTF } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react';
import { useFrame} from '@react-three/fiber'
import * as THREE from "three";

useGLTF.preload('/modal.glb');


export default function Modal() {
    const { scene } = useGLTF('/modal.glb')
    const groupRef = useRef<THREE.Group>(null!);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useFrame(() => {
        if (groupRef.current) {
            // Calculate scroll progress (0 to 1)
            const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
            const scrollProgress = Math.min(scrollY / maxScroll, 1);
            
            // Rotate downward (0 to -75 degrees)
            const targetRotationX = -scrollProgress * (Math.PI * -1); // ~75 degrees
            
            // Smooth rotation
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x, 
                targetRotationX, 
                0.08
            );
        }
    });

    return (
        <group ref={groupRef} position={[0, 1, -4]} scale={4}>
            <Float
                speed={2}
                floatIntensity={0.5}
                rotationIntensity={0.35}
            >
                <primitive object={scene} rotation={[0, Math.PI / 1.12, 0]} />
            </Float>
        </group>
        // <group ref={groupRef} position={[0, 1.5, -3]} scale={6}>
        //     <primitive object={scene} />
        // </group>
    )
}