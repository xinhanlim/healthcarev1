'use client'
import React, { useState } from 'react'


export default function MenuBtn() {

    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen((prev) => !prev);

    return (
        <button
            type="button"
            aria-label={open ? "Close Menu" : "Open Menu"}
            aria-expanded={open}
            aria-controls="menu"
            onClick={handleClick}
            className="group relative flex items-center justify-center btn-bgcolor md:hidden "
        >
            {/* blue sweep; won't block clicks */}
            <span className="absolute z-0 h-full w-full translate-y-20 rounded-t-[10rem] bg-[#007bff] transition-all duration-700 ease-expo group-hover:translate-y-0 group-hover:rounded-t-none"/>

            {/* label + animation */}
            <span className="relative z-10 flex items-center gap-x-2 px-4 py-2 font-medium ">
                <span className={`uppercase transition-all duration-500 ${open ? "absolute -translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`}>
                    menu
                </span>
                <span className={`uppercase transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "absolute translate-y-8 opacity-0"}`}>
                    close
                </span>
            </span>
        </button>
    )


}


