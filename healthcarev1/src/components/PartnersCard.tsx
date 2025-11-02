
type PartnerCardProps = {
    image: string,
}




export default function PartnersCard({image}: PartnerCardProps){
    return (
        <div className="flex h-32 w-full items-center justify-center news-btncolor p-5 sm:h-48 sm:p-8 md:p-10">
            <img src={image} alt="partners" className="h-full w-full object-contain"/>
        </div>
    )
}