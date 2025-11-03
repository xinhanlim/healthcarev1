'use client'
import Modal2 from '@/components/Modal2';
import { Environment } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";


export default function Secen2(){
    return(
        <Canvas>
            <directionalLight intensity={1} position={[0, 3, 1]}/>
            <Environment preset='sunset'/>
            <Modal2/>
        </Canvas>


    )
}