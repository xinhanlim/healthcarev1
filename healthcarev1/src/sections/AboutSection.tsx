import DropDown from "@/components/DropDown";

export default function AboutSection() {

    return (
        <section id="about">
            <div className="h-full min-h-[100vh] w-full flex flex-col sm:px-[5%] px-6 pt-12 pb-24 md:flex-row ">
                <div className="flex flex-col gap-y-5 min-w-[50%] py-5 relative">
                    <div className="flex flex-col py-2">
                        <h1 className=" z-20 text-h1 leading-none tracking-tighter section-header ">// About</h1>
                        <h1 className=" z-20 text-h4 sm:text-h7 sm:max-w-[50%] leading-none tracking-tighter uppercase ">Story of Us</h1>
                    </div>
                </div>
                <div className="pt-12 ">
                    <DropDown
                        title='Story'>
                        <p>It began with the "Chronos Anomaly" - a temporal energy surge that scattered fragments of ancient wisdom across our timeline. Our research team discovered these fragments contained blueprints for technology that harmonized organic and mechanical systems.

                            Dr. Aris Thorne, our founder, had a vision during the anomaly: "I saw a world where machines breathed with the rhythm of nature, where steel had a heartbeat, and where every technological advancement left the earth greener than it found it.</p>
                    </DropDown>
                    <DropDown
                        title='Vision'>
                        <p> To bridge humanity's past with its future, creating symbiotic technology that remembers its purpose is to serve, not dominate.</p>
                    </DropDown>
                    <DropDown
                        title='Values'>
                        <p>Symbiotic Innovation. Temporal Stewardship. Human-Centric Design. Silent Strength</p>
                    </DropDown>
                    <DropDown
                        title='Actions'>
                        <p>"We Build Remembering"

                            We remember that every circuit should have a purpose beyond profit.
                            We remember that strength is measured by what we protect, not what we destroy.
                            We remember that the future belongs to those who build bridges, not walls.

                            Our mechs don't stomp - they glide.
                            They don't consume - they generate.
                            They don't replace humans - they extend human potential.</p>
                    </DropDown>
                </div>
            </div>
        </section>
    )

}