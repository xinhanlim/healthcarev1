'use client'
import NewsCard from '@/components/NewsCard'
import NewsCard2 from '@/components/NewsCard2'
import NewsCard3 from '@/components/NewsCard3'
import PartnersCard from '@/components/PartnersCard'
import SliderImgReverse from '@/components/SliderImgReverseColor'

import SliderImg from '@/components/SliderImg'
import { motion } from 'framer-motion'

export default function NewSection() {
    return (
        <section id="news" className="relative z-60 body-cover">
            <div className="">
                <SliderImg />
            </div>

            <div className="h-full w-full pt-18 flex flex-col sm:pb-20 sm:px-[5%] px-6 sm:pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}>
                    <h1 className="text-h1 leading-none tracking-tighter section-header ">//News</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}>
                    <h1 className="text-h4 sm:text-h6 pt-4 pb-8 leading-none tracking-tighter ">Feature News</h1>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                    <NewsCard
                        image="news/photo1.jpg"
                        title="Singapore Medtech Startup Launches 'AuraSense' Smart Inhaler, Transforming Asthma and COPD Management with Real-Time Coaching"
                        description="AuraFlow Robotics today announced the commercial launch and Health Sciences Authority (HSA) approval of the AuraSense Smart Inhaler,
                         a groundbreaking device designed to tackle the critical issue of incorrect inhaler technique,
                         a problem affecting the majority of the over 300,000 asthma and COPD patients in Singapore. Unlike add-on devices..."
                    />
                    <NewsCard2
                        image="news/photo2.jpg"
                        title="Singapore Medtech Startup Launches 'AuraSense' Smart Inhaler, Transforming Asthma and COPD Management with Real-Time Coaching"
                        description="AuraFlow Robotics today announced the commercial launch and Health Sciences Authority (HSA) approval of the AuraSense Smart Inhaler,
                         a groundbreaking device designed to tackle the critical issue of incorrect inhaler technique,
                         a problem affecting the majority of the over 300,000 asthma and COPD patients in Singapore. Unlike add-on devices..."
                    />
                    <div className="col-span-1 sm:col-span-2">
                        <NewsCard3
                            image="news/photo3.jpg"
                            title="Singapore Medtech Startup Launches 'AuraSense' Smart Inhaler, Transforming Asthma and COPD Management with Real-Time Coaching"
                            description="AuraFlow Robotics today announced the commercial launch and Health Sciences Authority (HSA) approval of the AuraSense Smart Inhaler,
                         a groundbreaking device designed to tackle the critical issue of incorrect inhaler technique,
                         a problem affecting the majority of the over 300,000 asthma and COPD patients in Singapore. Unlike add-on devices..."/>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}>
                    <h1 className="text-h1 leading-none tracking-tighter section-header pt-24 ">//Partners</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}>
                    <h1 className="text-h4 sm:text-h6 pt-4 pb-8 leading-none tracking-tighter">Our Strategic Partners</h1>
                </motion.div>
                <div className=" grid sm:grid-cols-4 grid-cols-2 gap-6 pb-16 sm:pt-16">
                    <PartnersCard
                        image="partners/nus.png" />
                    <PartnersCard
                        image="partners/cgh.png" />
                    <PartnersCard
                        image="partners/sgh.png" />
                    <PartnersCard
                        image="partners/nuhs.png" />
                    <PartnersCard
                        image="partners/singhealth.png" />
                    <PartnersCard
                        image="partners/esg.png" />
                </div>
            </div>

            <SliderImgReverse />

        </section >
    )
}