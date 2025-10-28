'use client'
import ScrollSVG from '@/components/ScrollSVG'
import SceneClient from '../components/SceneClient'
import NavBtn from '@/components/NavBtn'
import { easeIn, motion } from 'framer-motion'




export default function HeroSection() {
    return (
        <section className="h-svh w-full flex flex-col justify-between sm:pb-4 sm:px-[5%] px-6 pt-24 ">

            <motion.div
                className="z-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 , ease:easeIn }}
                viewport={{ once: true }}

            ><h1 className=" sm:mix-blend-normal sm:text-[#282828] text-h4 sm:text-h6 py-1 sm:py-10 leading-none tracking-tighter sm:max-w-[80vh]">Engineering Precision in Every Breath</h1>
            </motion.div>
                <SceneClient />
            <motion.div initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 , ease:easeIn }}
                viewport={{ once: true }} className="z-20 mix-blend-normal flex sm:flex-row flex-row-reverse justify-between w-full pb-10">
                <ScrollSVG />
                <div className="flex flex-col justify-between max-w-[70%]">
                    <h1 className="sm:text-[#282828] pb-6 text-h1 sm:text-h4 py-1 sm:py-10 leading-none tracking-tighter sm:max-w-[90vh]">Trusted respiratory technology for hospitals, clinics, and care providers worldwide.</h1>
                    <NavBtn />
                </div>
            </motion.div>

        </section>
    )
}