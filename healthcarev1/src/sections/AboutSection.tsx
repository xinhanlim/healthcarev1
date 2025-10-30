import DropDown from "@/components/DropDown";

export default function AboutSection() {

    return (
        <section id="about">
            <div className="h-full min-h-[100vh] w-full flex flex-col sm:px-[5%] px-6 pt-12 pb-24 md:flex-row ">
                <div className="flex flex-col gap-y-5 min-w-[50%] py-5 relative">
                    <div className="flex flex-col py-2">
                        <h1 className=" z-20 text-h1 leading-none tracking-tighter section-header ">// About</h1>
                        <h1 className=" z-20 text-h4 pt-4 sm:text-h6 sm:max-w-[50%] leading-none tracking-tighter">Motivations that drives us today</h1>
                    </div>
                </div>
                <div className="pt-12 ">
                    <DropDown
                        title='Story'>
                        <p>Our Founder, Jennis never set out to start a medical technology company. She was just a engineer who watched her grandmother struggle to breathe. Frustrated by the clunky, impersonal respiratory devices available, she saw firsthand how existing technology failed the very people it was meant to help. The devices were functional, but they weren't human</p>
                    </DropDown>
                    <DropDown
                        title='Vision'>
                        <p>Born from the memory of a life lost, our vision is a future where families are kept whole, and a breath is never a goodbye</p>
                    </DropDown>
                    <DropDown
                        title='Values'>
                        <p>Precision with Purpose.&nbsp; Empathy in Action. &nbsp;Courageous Innovation.&nbsp; Lifelong Partnership</p>
                    </DropDown>
                    <DropDown
                        title='Actions'>
                        <p>Building affordable, smart devices that predict and prevent breathing crises before they happen.
                            Developing digital tools that empower individuals to better understand and manage their respiratory health.
                            Working directly with healthcare providers to implement our technology and gather real-world feedback for improvement.
                        </p>
                    </DropDown>
                </div>
            </div>
        </section>
    )

}