'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function LenisSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // Smoothness (0.1 = very smooth, 0.5 = less smooth)
      lerp: 0.1,
      
      // Scroll wheel sensitivity
      wheelMultiplier: 1,
      
      // Touch device sensitivity  
      touchMultiplier: 2,
      
      // Infinite scrolling (if needed)
      infinite: false,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return null
}