import Link from 'next/link'
import NavBtn from './NavBtn'

export default function Navbar() {
    return (
        <header className="fixed w-full w-full z-[999]">
            <nav className="flex items-center justify-between px-6 sm:px-[5%] xl:py-8 3xl:py-[7%] py-5 ">
                <Link href="/" className="leading-none text-small lg:text-h1 tracking-tighter">MechTech V1</Link>
                <ul className="hidden text-sm md:flex font-medium lg:text-base gap-x-4 uppercase items-center">
                    <li className="inline-block w-fit px-4 py-2 ">
                        <Link href='/' className="link-underline">Home</Link>
                    </li>
                    <li className="inline-block w-fit px-4 py-2 ">
                        <Link href='/' className="link-underline">Product</Link>
                    </li>
                    <li className="inline-block w-fit px-4 py-2 ">
                        <Link href='/' className="link-underline">News</Link>
                    </li>

                    <li className="inline-block w-fit px-4 py-4 btn-bgcolor border-1 ">
                        <div className="flex gap-x-2">
                            <NavBtn />
                        </div>

                    </li>

                </ul>
            </nav>
        </header>


    )
}