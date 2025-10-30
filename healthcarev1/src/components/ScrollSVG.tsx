'use client'

import { useEffect, useRef } from "react";

export default function ScrollSVG({
    style = "var(--foreground)"
}) {
    const svgRef = useRef<SVGSVGElement>(null);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            animationFrameRef.current = requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const docHeight =
                    document.documentElement.scrollHeight - window.innerHeight;

                const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1); 
                const rotation = progress * 270; 

                if (svgRef.current) {
                    svgRef.current.style.transform = `rotate(${rotation}deg)`;
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full h-full flex items-end justify-end sm:justify-start">
            <svg
                ref={svgRef}
                className="z-20 w-15 h-15 transition-transform duration-150 ease-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ 
                    transformOrigin: 'center',
                    willChange: 'transform' // Performance hint
                }}
            >
                <path fill={style} d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z" />
            </svg>
        </div>
    );
}