'use client'
import NewsCard from '@/components/NewsCard'
import SliderImg from '@/components/SliderImg'
import {motion} from 'framer-motion'

export default function NewSection(){
    return (
    <section id="news">
        <div className="transform -rotate-2 relative pt-20">
            <SliderImg/>
        </div>

        <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true}}
                transition={{ duration: 0.8 }}
                className="h-svh w-full flex flex-col sm:pb-20 sm:px-[5%] px-6 pt-10 sm:pt-24">
            <h1 className="z-20 text-h1 leading-none tracking-tighter section-header ">//News</h1>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:pb-20 sm:px-[5%] px-6">  
            <NewsCard/>
        </div>
    </section>
    )
}