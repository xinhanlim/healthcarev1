'use client'

import { Canvas } from "@react-three/fiber";
import { Suspense  } from "react";
import Modal from "./Modal";
import { useProgress, Html } from '@react-three/drei';


function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-sm text-gray-600">{progress.toFixed(2)}% loaded</p>
      </div>
    </Html>
  )
}

export default function Scene() {

    return (
        
        
        <div className="absolute inset-0">
            <Canvas gl={{ alpha: true, antialias: true }} className="h-svh" style={{ background: "transparent" }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[0, 4, 5]} intensity={1.2} color="#ffffff" />
                <directionalLight position={[0, -2, 1]} intensity={0.5} color="#f0f0f0" />
                <Suspense fallback={<Loader/>}>
                    <Modal />
                </Suspense>
            </Canvas>
        </div>

    )
}

