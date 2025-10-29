'use client'
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion'


const Scene = dynamic(() => import('@/components/Scene2'))


export default function TeamSection() {

    return (
        <section id="team" className="h-full relative w-full ">
            <div className="h-svh relative w-full" >
                <Scene />
                <div className="absolute w-full h-full inset-0 flex flex-col justify-center items-center ">
                    <h1 className="text-h1 leading-none tracking-tighter section-header">// Team</h1>
                    <h1 className="py-2 text-h5 xl:text-h7 leading-none tracking-tighter uppercase mix-blend-multiply sm:max-w-[40%] text-center">Meet The Team MechTech</h1>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true}}
                transition={{ duration: 0.8 }}
                className="px-[5%] grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
                <div className="flex flex-col gap-y-4">
                    <img src="members/1.jpg" alt="member" className="border-3 border-[#282828]/70" />
                    <div className="pb-4 uppercase">
                        <h1 className="text-h2 leading-none tracking-tighter">Jennis</h1>
                        <h1 className="text-small pt-2 leading-none tracking-tighter section-header">CEO of Mech Tech </h1>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <img src="members/2.jpg" alt="member" className="border-3 border-[#282828]/70" />
                    <div className="pb-4 uppercase">
                        <h1 className="text-h2 leading-none tracking-tighter">DR Jennifer</h1>
                        <h1 className="text-small pt-2 leading-none tracking-tighter section-header">Deputy Manager of Mech Tech</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <img src="members/4.jpg" alt="member" className="border-3 border-[#282828]/70" />
                    <div className="pb-4 uppercase">
                        <h1 className="text-h2 leading-none tracking-tighter">DR Jasper</h1>
                        <h1 className="text-small pt-2 leading-none tracking-tighter section-header">Doctor</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <img src="members/3.jpg" alt="member" className="border-3 border-[#282828]/70" />
                    <div className="pb-4 uppercase">
                        <h1 className="text-h2 leading-none tracking-tighter">Jasmine</h1>
                        <h1 className="text-small pt-2 leading-none tracking-tighter section-header">Design Team Lead</h1>
                    </div>
                </div>

                <div className="flex flex-col gap-y-4">
                    <img src="members/8.jpg" alt="member" className="border-3 border-[#282828]/70" />
                    <div className="pb-4 uppercase">
                        <h1 className="text-h2 leading-none tracking-tighter">Melody</h1>
                        <h1 className="text-small pt-2 leading-none tracking-tighter section-header">UX/UI DESIGNER</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <img src="members/5.jpg" alt="member" className="border-3 border-[#282828]/70" />
                    <div className="pb-4 uppercase">
                        <h1 className="text-h2 leading-none tracking-tighter">Justin</h1>
                        <h1 className="text-small pt-2 leading-none tracking-tighter section-header">Software Team Lead</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <img src="members/6.jpg" alt="member" className="border-3 border-[#282828]/70" />
                    <div className="pb-4 uppercase">
                        <h1 className="text-h2 leading-none tracking-tighter">James</h1>
                        <h1 className="text-small pt-2 leading-none tracking-tighter section-header">Software Developer</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <img src="members/7.jpg" alt="member" className="border-3 border-[#282828]/70" />
                    <div className="pb-4 uppercase">
                        <h1 className="text-h2 leading-none tracking-tighter">Bond</h1>
                        <h1 className="text-small pt-2 leading-none tracking-tighter section-header">Software Developer</h1>
                    </div>
                </div>


            </motion.div>
        </section>
    )

}