import ArrowSVG from "./ArrowSVG"

type NewsCardProps = {
    title: string,
    description: string,
}


export default function NewsCard({ title, description }: NewsCardProps) {
    return (
        <div className="group h-full w-full py-10 border-t">
            <div className="flex flex-row gap-y-9 gap-10 justify-between">
                <img src='https://placehold.co/900x400' alt="image of headlines" />
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-h3 leading-none tracking-tighter">{title}</h1>
                        <h1 className="text-base">{description}</h1>
                    </div>

                    <div className="flex flex-col gap-8 ">
                        <div className="flex justify-between flex-row w-full">
                            <div className="flex gap-x-4">
                                <span className="px-3 py-2 news-btncolor"> Product Showcase</span>
                                <span className="px-3 py-2 news-btncolor"> Aug 19, 2024</span>
                            </div>
                            <div>
                                <ArrowSVG />
                            </div>
                        </div>
                    </div>
                </div>



            </div>


        </div>
    )
}