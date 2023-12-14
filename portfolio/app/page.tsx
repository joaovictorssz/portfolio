import AboutSection from '@/components/AboutSection'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'


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
      
      <div id='experiences'>
        <Experience/>
      </div>

      <div id='projects'>
        <Projects/>
      </div>

      <div id='contact'>
        <Contact/>
      </div>
      
      <Footer/>


    </main>
  )
}
