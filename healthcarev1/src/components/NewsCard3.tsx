import ArrowSVG from "./ArrowSVG"

type NewsCardProps = {
    title: string,
    description: string,
}


export default function NewsCard({ title, description }: NewsCardProps) {
    return (
        <div className="group h-full w-full py-10 border-t">
            <div className="flex flex-col 2xl:flex-row gap-y-9 gap-10 justify-between">
                <div className="overflow-hidden w-full h-full">
                    <img src='https://placehold.co/900x400' alt="image of headlines" className="transition-all duration-1000 group-hover:scale-110 overflow-hidden"/>
                </div>
                <div className="flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-small sm:text-h3 leading-none tracking-tighter">{title}</h1>
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



            </div>


        </div>
    )
}