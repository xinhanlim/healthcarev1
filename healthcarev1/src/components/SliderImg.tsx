'use client'
import { motion } from 'framer-motion';

export default function SliderImg() {
    const images = [
        { img: "tst.png" },
        { img: "tst.png" },
        { img: "tst.png" },
        { img: "tst.png" },
        { img: "tst.png" },
        { img: "tst.png" },
    ]
    const duplicatedImages = [...images, ...images]

    return (
        <div className="flex overflow-hidden justify py-14 bg-[#fefefe]">
            {duplicatedImages.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex-shrink-0 h-10 mx-4"
                    animate={{
                        x: [0, -100  * images.length]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <img
                        src={item.img}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-contain" // Adjust size as needed
                    />
                </motion.div>
            ))}
        </div>
    )
}