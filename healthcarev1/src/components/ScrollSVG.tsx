'use client'

import { useEffect, useRef } from "react";

export default function ScrollSVG({
    style = "var(--foreground)"
}) {

    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress = scrollTop / docHeight; // 0 → 1
            const rotation = progress * 45; // rotate 0°–45°

            if (svgRef.current) {
                svgRef.current.style.transform = `rotate(${rotation}deg)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div className="w-full h-full flex items-end justify-start ">
            <svg
                ref={svgRef}
                className=" z-20 w-20 h-20 transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path fill={style} d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z" />
            </svg>
        </div>
    )

}