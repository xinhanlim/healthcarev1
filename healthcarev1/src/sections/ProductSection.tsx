'use client'
import Products from "@/components/Products";
import { motion } from 'framer-motion';


export default function ProductionSection() {
    return (
        <section id="product" className="z-50 h-full w-full flex flex-col sm:px-[5%] px-6 sm:pt-12 ">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="border-b border-[#282828]/50 ">
                <h1 className="text-h1 leading-none tracking-tighter section-header">
                    <span aria-hidden="true">{'//'}</span> Team
                </h1>
                <h1 className="text-h4 pt-4 pb-20 sm:text-h6 sm:max-w-[50%] leading-none tracking-tighter  ">Supporting Patients, Enabling Physicians</h1>
            </motion.div>
            <div className="flex flex-col pb-24">
                <Products
                    title="AuraSense Smart Inhaler" />
                <Products
                    title="PulmoSync Monitor" />
                <Products
                    title="OxyGenius Portable" />
                <Products
                    title="VitaFlow CPAP" />
                <Products
                    title="AeroMech Flow" />
                <Products
                    title="PulmoSync Flow" />
            </div>
        </section>

    )
}