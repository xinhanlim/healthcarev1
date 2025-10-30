'use client'
import { motion} from 'framer-motion';

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
             <motion.div 
                className="flex"
                animate={{
                    x:  [0, -100 * images.length]  // Right to left
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {duplicatedImages.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 h-10 mx-4"
                    >
                        <img
                            src={item.img}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}