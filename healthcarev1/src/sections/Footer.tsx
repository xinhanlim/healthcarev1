import SliderImgReverse from "@/components/SliderImgReverseColor";
import Link from "next/link";
import ArrowSVG from "@/components/ArrowSVG";


export default function Footer() {

    return (
        <>
            <div className="sticky -bottom-96 z-0 sm:bottom-0 ">
                <div className="relative grid grid-cols-1 sm:grid-cols-2 sm:px-[5%] px-6 py-12 gap-12">
                    <div className="flex flex-col gap-y-12">
                        <h1 className="text-h4 sm:text-h6 py-1 sm:py-10 leading-none tracking-tighter max-w-[55%] ">MECH TECH V1</h1>
                        <div className="flex flex-col">
                            <div className=" flex flex-row gap-2 items-center">
                                <ArrowSVG />
                                <h1 className="text-small leading-none tracking-tighter">Get in touch with us </h1>
                            </div>
                            <Link href="mailto:xxxxx@gmail.com" className="link-underline max-w-min text-h1 leading-none tracking-tighter py-2">xxxxxxxxxx@gmail.com</Link>
                        </div>

                    </div>

                    <ul className="flex flex-col w-full text-h1 font-medium gap-x-10 gap-y-6 uppercase justify-end ">
                        <Link href='#about' className="group group-hover flex flex-row justify-between items-center border-b-1 py-4 opacity-90">
                            <li className="inline-block w-full py-2 ">
                            About
                            </li>
                            <ArrowSVG />
                        </Link>
                        <Link href='#team'className="group group-hover flex flex-row justify-between items-center border-b-1 py-4 opacity-90">
                            <li className="inline-block w-fit py-2 border-bottom-1 outline-offset-2">
                               Team
                            </li>
                            <ArrowSVG />
                        </Link>
                        <Link href='#product'className=" group group-hover  flex flex-row justify-between items-center border-b-1 py-4 opacity-90">
                            <li className="inline-block w-fit py-2 border-bottom-1 outline-offset-2">
                             Product
                            </li>
                            <ArrowSVG />
                        </Link>
                        <Link href='#news'className=" group group-hover  flex flex-row justify-between items-center border-b-1 py-4 opacity-90">
                            <li className="inline-block w-fit py-2 border-bottom-1 outline-offset-2">
                            News
                            </li>
                            <ArrowSVG />
                        </Link>
                        <Link href='/' className=" group group-hover flex flex-row justify-between items-center border-b-1 py-4 ">
                            <li className="inline-block text-[#282828] w-fit py-2 border-bottom-1 outline-offset-2">
                            GET A DEMO
                            </li>
                            <ArrowSVG style="var(--foreground)" />
                        </Link>

                    </ul>
                </div>
            </div>
            <SliderImgReverse />
        </>
    )
}