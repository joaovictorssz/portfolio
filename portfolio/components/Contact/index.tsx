'use client'

import Image from "next/image"
import ball from '@/public/ball.png'
import ReactFlow, {Background} from "reactflow"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { MdOutlineAlternateEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div className="w-full flex  justify-center items-center p-10 text-[#121212]">
        
            <div className="h-screen w-full py-10 flex flex-col xl:flex-row  justify-center items-center text-center lg:text-left p-10">

                <Image data-aos="fade-up" alt="ball" src={ball} className="animate-pulse"/>
                <section className="text-white">
                    <p className="z-[999px] font-extrabold text-xl md:text-2xl xl:text-3xl">If you were clicks away from an <strong className="text-purple-400">expert</strong> developer, <br />would you call him for a project?<br /> </p>
                   
                   <section className="flex flex-col md:flex-row space-y-1 md:space-x-2  md:space-y-0">
                   <Link href={'mailto:joaovictorsilva.dev@gmail.com'} className="w-full md:w-fit" data-aos="fade-left" data-aos-delay={100}>
                        <button className="p-4 rounded mt-10 bg-purple-600 font-semibold w-full md:w-fit hover:bg-purple-500 transition-colors flex items-center"><span className="mr-2"><MdOutlineAlternateEmail/></span>E-mail me</button>
                    </Link>
                    <Link href={'https://linkedin.com/in/victorpicanco'}  data-aos="fade-left" data-aos-delay={200}>
                        <button className="p-4 rounded mt-10 bg-purple-600 font-semibold w-full md:w-fit hover:bg-purple-500 transition-colors flex items-center"><span className="mr-2"><FaLinkedin/></span>Connect me on LinkedIn</button>
                    </Link>

                    <Link href={'https://github.com/joaovictorssz'}  data-aos="fade-left" data-aos-delay={300}>
                        <button className="p-4 rounded mt-10 bg-purple-600 font-semibold w-full md:w-fit hover:bg-purple-500 transition-colors flex items-center"><span className="mr-2"><FaGithub/></span>Follow me on GitHub</button>
                    </Link>

                   </section>

                </section>
            </div>    
            
        </div>
    )
}

export default Contact