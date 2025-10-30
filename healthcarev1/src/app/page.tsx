import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import TeamSection from '@/sections/TeamSection'
import ProductionSection from '@/sections/ProductSection'
import NewSection from '@/sections/NewSection'
import Footer from '@/sections/Footer'

export default function Homepage(){
  return (
    <>
    <main className="z-60">
    <HeroSection/>
    <AboutSection/>
    <TeamSection/>
    <ProductionSection/>
    <NewSection/>
    </main>
    <footer>
        <div className=" mt-[-100svh]">
        <div aria-hidden="true" className=" relative h-svh"></div>
        <Footer/>
        </div>
    </footer>
    
    </>
  )
}