'use client'
import Link from "next/link"

export default function NavBtn() {
    return (
        <div className="group flex relative gap-x-2 px-4 py-4 z-10 btn-colorhover overflow-hidden">
             <span className="pointer-event-none absolute block inset-0 rounded-t-[10rem] z-0 w-full h-full translate-y-20 btn-color transition-all duration-300 ease-expo
             group-hover:translate-y-0 group-hover:rounded-t-none"/>
            <Link href="/ "className="z-10 uppercase link-underline pointer-events-auto">Get A Demo</Link>
            <svg
                className=" z-10 transition-transform duration-300 group-hover:-rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24">
                <path fill="var(--btn-arrowcolor)" d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z" />
            </svg>
            
        </div>
        
    )

}
