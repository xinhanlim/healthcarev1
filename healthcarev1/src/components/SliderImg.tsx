'use client'
import { motion } from 'framer-motion';

export default function SliderImg() {
    const text = [
        {text: "Mech Tech V1"},
        {text: "Mech Tech V1"},
        {text: "Mech Tech V1"},
        {text: "Mech Tech V1"},
        {text: "Mech Tech V1"},
        {text: "Mech Tech V1"},
        {text: "Mech Tech V1"},
        {text: "Mech Tech V1"},
        {text: "Mech Tech V1"},
    ]
const duplicatedText = [...text, ...text]



return (
    <div className="flex overflow-hidden justify py-10 bg-[#fefefe]">
        <motion.div
            className="flex gap-x-10"
            animate={{
                x: [0, '-50%']
            }}
            transition={{
                duration: 19,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
            }}
        >
            {duplicatedText.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 mx-4 group"
                    >
                        <h1 className="text-h5 font-bold text-[#282828] transition-all duration-300 tracking-tighter leading-none">
                            {item.text}
                        </h1>
                    </div>
                ))}
        </motion.div>
    </div>
)
}