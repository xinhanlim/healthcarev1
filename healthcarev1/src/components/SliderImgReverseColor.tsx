'use client'
import { motion } from 'framer-motion';

export default function SliderImgReverse() {
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
    <div className="flex overflow-hidden justify py-10 bg-[#282828]">
        <motion.div
            className="flex"
            animate={{
                x: [0, -100 * text.length]
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {duplicatedText.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 mx-4 group"
                    >
                        <h1 className="text-h5 font-bold text-[#fefefe] transition-all duration-300 tracking-tighter leading-none">
                            {item.text}
                        </h1>
                    </div>
                ))}
        </motion.div>
    </div>
)
}