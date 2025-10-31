import ArrowSVG from "./ArrowSVG"

type NewsCardProps = {
    title: string,
    description: string
}


export default function NewsCard({ title, description }: NewsCardProps) {
    return (
        <div className=" group h-full w-full pt-4">
            <div className="flex flex-col gap-y-9">
               <div className="overflow-hidden w-full h-full">
                    <img src='https://placehold.co/900x400' alt="image of headlines" className="transition-all duration-1000 group-hover:scale-110 overflow-hidden"/>
                </div>
                <div className="sm:max-w-[80%] flex flex-col gap-8 pb-8">
                    <h1 className="text-h1 sm:text-h3 leading-none tracking-tighter">{title}</h1>
                    <h1 className="text-base tracking-tighter">{description}</h1>
                </div>
                <div className="flex justify-between flex-row">
                    <div className="flex gap-x-4">
                        <span className="px-2 py-2 news-btncolor"> Product Showcase</span>
                        <span className="px-2 py-2 news-btncolor"> Aug 19, 2024</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <ArrowSVG />
                    </div>
                </div>

            </div>


        </div>
    )
}