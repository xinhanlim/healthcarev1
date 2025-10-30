'use client'
import { useState } from "react";


type DropDownProps = {
    title: string;
    children?: React.ReactNode;

}


export default function DropDown({ title, children }: DropDownProps) {
    const [open, setOpen] = useState(false)
    return (
        <>

            <button
                onClick={() => [
                    setOpen(!open)
                ]}
                className="w-full"
            >
                <div className="flex flex-row justify-between items-center border-b">
                    <div className=" z-20 py-6 text-h3 sm:text-h4  leading-none tracking-tighter uppercase ">{title}</div>
                    <div className="text-2xl transition-all duration-300">
                        {open ? '-' : '+'}
                    </div>
                </div>
            </button>

            <div className={`transition-all duration-600 ease-in-out overflow-hidden ${open ? 'max-h-96 opacity-100 ' : 'max-h-0 opacity-0'}`}>
                <div className="py-8 text-small tracking-tighter ">
                    {children}
                </div>
            </div>
        </>
    )
}



