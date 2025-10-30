import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import TeamSection from '@/sections/TeamSection'
import ProductionSection from '@/sections/ProductSection'
import NewSection from '@/sections/NewSection'

export default function Homepage(){
  return (
    <main>
    <HeroSection/>
    <AboutSection/>
    <TeamSection/>
    <ProductionSection/>
    <NewSection/>
    <HeroSection/>
  
    </main>
  )
}