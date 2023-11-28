import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className='container mx-auto px-12'>
      <HeroSection/>  

      </div>    

      <div id='about'>
        <AboutSection/>
      </div>

      <div id='projects'>
        <Projects/>
      </div>

      <div id='technologies'>
        <Technologies/>
      </div>
    </main>
  )
}
