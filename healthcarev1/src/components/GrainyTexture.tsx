'use client'

export default function Grainy() {
    return (
        <>
            <svg className="pointer-events-none absolute cursor-none">
                <filter id="grainy">
                    <feTurbulence
                        type="turbulence"
                        baseFrequency="1.2"
                        stitchTiles="stitch"
                        >
                    </feTurbulence>
                    <feColorMatrix type="saturate" values="0"></feColorMatrix>
                </filter>


            </svg>
        </>
    )
}
