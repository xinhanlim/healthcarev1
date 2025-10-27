'use client'

import { Float, useGLTF } from '@react-three/drei'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import * as THREE from "three";

useGLTF.preload('/modal.glb');


export default function Modal() {
    const { scene } = useGLTF('/modal.glb')
    // const groupRef = useRef<THREE.Group>(null!);
    // useFrame((state, delta) => {
    // });

    return (
        <Float
            speed={1.6}
            floatIntensity={0.38}
            rotationIntensity={0.35}
            position={[0, 1, -4]}
            scale={4}
        >
            <primitive object={scene} rotation={[0, Math.PI / 1, 0]} />
        </Float>

        // <group ref={groupRef} position={[0, 1.5, -3]} scale={6}>
        //     <primitive object={scene} />
        // </group>
    )
}