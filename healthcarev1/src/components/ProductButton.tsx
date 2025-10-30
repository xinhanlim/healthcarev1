import Link from 'next/link'
import ArrowSVG2 from './ArrowSVG2'

export default function ProductButton(){
    return (
         <div className="group flex relative gap-x-2 px-4 py-4 z-10 bg-transparent justify-center overflow-hidden">
           <ArrowSVG2/>
        </div>
    )
}