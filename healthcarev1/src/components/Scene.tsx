'use client'

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Modal from "./Modal"




export default function Scene() {

    return (
        <div className="absolute inset-0 ">
            <Canvas gl={{ alpha: true, antialias: true }} style={{ background: "transparent" }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[0, 4, 5]} intensity={1.2} color="#ffffff" />
                <directionalLight position={[0, -2, 1]} intensity={0.5} color="#f0f0f0" />
                <Suspense fallback={null}>
                    <Modal />
                </Suspense>
            </Canvas>
        </div>

    )
}

