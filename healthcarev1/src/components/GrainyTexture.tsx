'use client'

export default function Grainy() {
    return (
        <>
            <svg className="pointer-events-none absolute cursor-none">
                <filter id="grainy">
                    <feTurbulence
                        type="turbulence"
                        baseFrequency="1.8"
                        stitchTiles="stitch"
                        >
                    </feTurbulence>
                    <feColorMatrix type="saturate" values="1"></feColorMatrix>

                </filter>


            </svg>
        </>
    )
}
