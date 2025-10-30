import ProductButton from "./ProductButton";
import {motion} from 'framer-motion'

type ProductsProps= {
    title: string;
}

export default function Products({title}: ProductsProps){
    return (
        <>
         <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true}}
                transition={{ duration: 0.8 }} className="group relative pt-10 pb-10 border-b border-[#282828]/50 flex justify-between items-center w-full overflow-hidden ">
            <span className="text-h1 max-w-[5%] sm:max-w-none sm:text-h3 z-10 leading-none tracking-tighter pl-4">{title}</span>
            <span className="pointer-event-none absolute block inset-0 rounded-t-[10rem] z-0 w-full h-full translate-y-100 btn-color transition-all duration-600 ease-in-out
             group-hover:translate-y-0 group-hover:rounded-t-none"/>
            <ProductButton/>
        </motion.div>
        </>
    )
}