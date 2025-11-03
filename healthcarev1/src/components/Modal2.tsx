'use client'

import { Float, useGLTF } from "@react-three/drei"
import React, { useEffect, useState } from 'react'
import { useThree} from '@react-three/fiber'

export default function Modal2() {
    const { nodes } = useGLTF('modal2.glb');
    const { viewport } = useThree();
    const [ , setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const mobile = viewport.width < 4
    const scale = mobile ? 0.9 : 1.07


    return (
        <group scale={scale} >
            <group position={[0, 0.5, 0]} >
                <Float
                    speed={4}
                    rotationIntensity={0}
                    floatIntensity={1}
                >
                    <primitive object={nodes.Torus001} />
                </Float>
            </group>
            <group position={[-2, 0.4, 0]} >

                <Float
                    speed={4}
                    rotationIntensity={0}
                    floatIntensity={1}
                >
                    <primitive object={nodes.Sphere} />
                </Float>
            </group>
            <group position={[-0.8, 1, 0]} >
                <Float
                    speed={4}
                    rotationIntensity={0}
                    floatIntensity={1}
                >
                    <primitive object={nodes.Cylinder} />
                </Float>
            </group>
        </group>

    )
}