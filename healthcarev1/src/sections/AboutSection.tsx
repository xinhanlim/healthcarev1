import DropDown from "@/components/DropDown";

export default function AboutSection() {

    return (
        <section id="about" className="h-full min-h-[100vh] w-full flex flex-col sm:px-[5%] px-6 pt-12 pb-24 md:flex-row ">
            <div className="flex flex-col gap-y-5 min-w-[50%] py-5 relative">
                <div className="flex flex-col py-2">
                    <h1 className=" z-20 text-h1 leading-none tracking-tighter section-header ">// About</h1>
                    <h1 className=" z-20 text-h4 sm:text-h7 sm:max-w-[50%] leading-none tracking-tighter uppercase ">Story of Us</h1>
                </div>

            </div>
            <div className="pt-12 ">
               <DropDown 
               title='Story'>
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum ducimus recusandae, maxime sed aperiam ab quibusdam iste rerum dolorum explicabo iure commodi voluptas porro praesentium. Laboriosam eligendi quasi doloribus.</p>
               </DropDown>
               <DropDown 
               title='Vision'>
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum ducimus recusandae, maxime sed aperiam ab quibusdam iste rerum dolorum explicabo iure commodi voluptas porro praesentium. Laboriosam eligendi quasi doloribus.</p>
               </DropDown>
                <DropDown 
               title='Values'>
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum ducimus recusandae, maxime sed aperiam ab quibusdam iste rerum dolorum explicabo iure commodi voluptas porro praesentium. Laboriosam eligendi quasi doloribus.</p>
               </DropDown>
                <DropDown 
               title='Actions'>
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum ducimus recusandae, maxime sed aperiam ab quibusdam iste rerum dolorum explicabo iure commodi voluptas porro praesentium. Laboriosam eligendi quasi doloribus.</p>
               </DropDown>
            </div>

        </section>
    )

}