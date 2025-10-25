'use client'
import Link from "next/link"
import ArrowSVG from "./ArrowSVG"

export default function NavBtn() {
    return (
        <div className="group flex relative gap-x-2 px-4 py-4 z-10 btn-colorhover justify-center overflow-hidden">
             <span className="pointer-event-none absolute block inset-0 rounded-t-[10rem] z-0 w-full h-full translate-y-20 btn-color transition-all duration-300 ease
             group-hover:translate-y-0 group-hover:rounded-t-none"/>
            <Link href="/ "className="z-10 uppercase link-underline pointer-events-auto">Get A Demo</Link>
           <ArrowSVG/>
        </div>
        
    )

}
