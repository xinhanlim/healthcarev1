'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link'
import NavBtn from './NavBtn'
import MenuBtn from './MenuBtn'


export default function Navbar() {
    const [scrollPos, setScrollPos] = useState(0);
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const scrollingUp = scrollPos > currentScrollPos;
            if (currentScrollPos < 150) {
                setShowNav(true)
            } else {
                setShowNav(scrollingUp || currentScrollPos < scrollPos)
            }
            setScrollPos(currentScrollPos)
            
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPos, showNav]);


    return (
        <>

        <header className={`fixed w-full w-full z-[999] bg-color transition-all duration-500 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`} >
            <nav className="flex items-center justify-between px-6 sm:px-[5%] sm:py-8 3xl:py-[4%] py-5 ">
                <Link href="#home" className="z-40 leading-none text-h1 lg:text-h2 tracking-tighter ">MechTech V1</Link>
                <ul className="hidden text-sm md:flex font-medium lg:text-base gap-x-4 uppercase items-center">
                    <li className="inline-block w-fit px-4 py-2 ">
                        <Link href='#about' className="link-underline">About</Link>
                    </li>
                    <li className="inline-block w-fit px-4 py-2 ">
                        <Link href='#team' className="link-underline">Team</Link>
                    </li>
                    <li className="inline-block w-fit px-4 py-2 ">
                        <Link href='#product' className="link-underline">Product</Link>
                    </li>
                    <li className="inline-block w-fit px-4 py-2 ">
                        <Link href='#news' className="link-underline">News</Link>
                    </li>
                    <li className="inline-block w-fit px-4 py-2 ">
                        <div className="flex gap-x-2">
                            <NavBtn />
                        </div>
                    </li>
                </ul>
                <MenuBtn />
            </nav>
        </header>

        <div id="mobile-menu-root"></div>
        </>

    )
}