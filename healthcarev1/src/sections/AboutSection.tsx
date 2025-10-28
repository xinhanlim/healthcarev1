
export default function AboutSection() {
    return (
        <section id="#about" className="h-[200vh] w-full flex flex-col sm:pb-4 sm:px-[5%] px-6 pt-24 md:flex-row ">
            <div className="flex flex-col gap-y-5 min-w-[50%] py-5 relative">
                <div className="sticky top-0 h-screen flex flex-col py-16">
                    <h1 className=" z-20 text-h1 leading-none tracking-tighter section-header ">// About</h1>
                    <h1 className=" z-20 text-h4 sm:text-h6 leading-none tracking-tighter uppercase ">Story of Us</h1>
                </div>

            </div>
            <div className="">
                <h1 className=" z-20 text-h4  leading-none tracking-tighter uppercase pt-[120px]">Story</h1>
            </div>

        </section>
    )

}