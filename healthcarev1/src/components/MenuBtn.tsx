'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ArrowSVG from './ArrowSVG';
import { createPortal } from 'react-dom';

export default function MenuBtn() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleClick = () => setOpen((prev) => !prev);

    const mobileMenuContent = (
        <div className={`md:hidden fixed bottom-0 left-0 w-screen h-screen btn-color z-60 pt-18 transition-transform ease duration-600 ${open ? 'translate-y-0' : 'translate-y-full'}`}>
            <ul className="flex flex-col px-[6%] w-full text-h2 min-h-screen font-medium lg:text-base gap-x-10 gap-y-6 uppercase justify-end ">
                <div>
                    <div className="flex flex-row justify-between items-center border-b-1 py-4 opacity-90">
                        <li className="inline-block w-fit py-2 ">
                            <Link href='#about' onClick={handleClick}>About</Link>
                        </li>
                        <ArrowSVG />
                    </div>
                    <div className=" flex flex-row justify-between items-center border-b-1 py-4 opacity-90">
                        <li className="inline-block w-fit py-2 border-bottom-1 outline-offset-2">
                            <Link href='/' onClick={handleClick}>Team</Link>
                        </li>
                        <ArrowSVG />
                    </div>
                    <div className=" flex flex-row justify-between items-center border-b-1 py-4 opacity-90">
                        <li className="inline-block w-fit py-2 border-bottom-1 outline-offset-2">
                            <Link href='/' onClick={handleClick}>Product</Link>
                        </li>
                        <ArrowSVG />
                    </div>
                    <div className=" flex flex-row justify-between items-center border-b-1 py-4 opacity-90">
                        <li className="inline-block w-fit py-2 border-bottom-1 outline-offset-2">
                            <Link href='/' onClick={handleClick}>News</Link>
                        </li>
                        <ArrowSVG />
                    </div>
                    <div className=" flex flex-row justify-between items-center border-b-1 py-4 ">
                        <li className="inline-block text-[#282828] w-fit py-2 border-bottom-1 outline-offset-2">
                            <Link href='/' >GET A DEMO</Link>
                        </li>
                        <ArrowSVG style="var(--foreground)"/>
                    </div>
                </div>
                <div className="py-10 flex flex-row items-end">
                    <div className="text-base pt-9 w-full text-right">
                        <h1>xxxxxxxxxx@gmail.com</h1>
                    </div>
                </div>
            </ul>
        </div>
    );

    return (
        <>
            <button
                type="button"
                aria-label={open ? "Close Menu" : "Open Menu"}
                aria-expanded={open}
                aria-controls="menu"
                onClick={handleClick}
                className="group relative z-40 overflow-hidden flex items-center justify-center btn-colorhover md:hidden"
            >
                <span className="absolute z-0 h-full w-full translate-y-20 rounded-t-[10rem] btn-color transition-all duration-300 ease group-hover:translate-y-0 group-hover:rounded-t-none" />
                <span className="relative z-10 flex items-center uppercase justify-center gap-x-2 px-4 py-2 font-medium min-w-[90px]">
                    <span className={`transition-all duration-500 ${open ? "absolute -translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`}>
                        menu
                    </span>
                    <span className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "absolute translate-y-8 opacity-0"}`}>
                        close
                    </span>
                </span>
            </button>

            {mounted && createPortal(mobileMenuContent, document.getElementById('mobile-menu-root')!)}
        </>
    )
}