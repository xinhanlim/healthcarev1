import ArrowSVG from "./ArrowSVG"

type NewsCardProps = {
    title: string,
    description: string,
    image:string
}


export default function NewsCard({ title, description, image }: NewsCardProps) {
    return (
        <div className="group h-full w-full sm:pl-8 border-t sm:border-l sm:border-t-0 flex justify-between ">
            <div className="flex flex-col-reverse sm:flex-col justify-between">
                <div className="w-full h-full flex flex-col justify-between sm:pb-8">
                    <div className="flex gap-8 flex-col pb-8 sm:pb-0">
                        <h1 className="text-small sm:text-h3 leading-none tracking-tighter pt-8 sm:pt-0">{title}</h1>
                        <h1 className="text-base tracking-tighter">{description}</h1>
                    </div>
                    <div className="flex justify-between flex-row">
                        <div className="flex gap-x-4">
                            <span className="px-3 py-2 news-btncolor"> Product Showcase</span>
                            <span className="px-3 py-2 news-btncolor"> Aug 19, 2024</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <ArrowSVG />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden w-full h-full pt-8 sm:pt-0">
                    <img src={image} alt="image of headlines" className="transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 overflow-hidden"/>
                </div>


            </div>


        </div>
    )
}