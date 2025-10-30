'use client'
import Products from "@/components/Products";
import {motion } from 'framer-motion';

export default function ProductionSection(){
return(
    <section id="product" className="h-full w-full flex flex-col sm:pb-4 sm:px-[5%] px-6 pt-10 sm:pt-24 ">
        <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true}}
                transition={{ duration: 0.8 }}
                className="border-b border-[#282828]/50">
            <h1 className="z-20 text-h1 leading-none tracking-tighter section-header ">//Product</h1>
            <h1 className="z-20 text-h4 pt-4 pb-20 sm:text-h6 sm:max-w-[50%] leading-none tracking-tighter  ">Supporting Patients, Enabling Physicians</h1>
        </motion.div>
        <div className="flex flex-col">
            <Products 
            title = "AuraSense Smart Inhaler"/>
            <Products 
            title = "PulmoSync Monitor"/>
            <Products 
            title = "OxyGenius Portable"/>
            <Products 
            title = "VitaFlow CPAP"/>
        </div>
    </section>
)
}