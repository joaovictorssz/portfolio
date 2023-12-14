'use client'

import Image from 'next/image';
import ReactFlow, { Background } from 'reactflow';

import profile from '@/public/profile.svg'
import Resume from '../Resume';
import { useState } from 'react';
import Education from '../Education';
import Certificates from '../Certificates';

const  AboutSection = () => {
    
    const [section, setSection] = useState<string>('resume')

    return(
        <div className='w-full text-[#121212]' data-aos="fade-left">
            <ReactFlow>
            <Background color='#454545'/>
            <div className='w-full h-screen flex items-center justify-center p-6 py-16'>
                <section className='z-10 max-w-[800px] bg-[#1b1b1b] rounded p-6'>
                    <header className='flex items-center'>      
                        <Image src={profile} alt='profile'/>
                        <section className='ml-3'> 
                            <h1 className='text-lg md:text-2xl font-semibold mb-1 text-white'>João Victor Picanço</h1>
                            <p className='text-[0.7rem] md:text-sm italic font-mono text-[#5b5b5b]'>joaovictorsilva.dev@gmail.com</p>
                            <p className='text-[0.7rem] md:text-sm italic font-mono text-[#5b5b5b]'>@jvcoder</p>
                        </section>
                    </header>

                    <section className='text-white font-semibold pt-6 flex space-x-3 justify-around md:justify-normal'>
                        <button onClick={()=>setSection("resume")} className={`transition-all ${section === 'resume' ? 'border-b border-purple-500 text-white' :  'text-[#565656]'}`}>Resume</button>
                        <button onClick={()=>setSection("education")} className={`transition-all ${section === 'education' ? 'border-b border-purple-500 text-white' :  'text-[#565656]'}`}>Education</button>
                        <button onClick={()=>setSection("certifications")} className={`transition-all ${section === 'certifications' ? 'border-b border-purple-500 text-white' :  'text-[#565656]'}`}>Certifications</button>
                    </section>

                    <main className='flex flex-col space-y-2 my-6 text-[10px] md:text-base text-[#a3a3a3]'>
                        {section === 'resume' && <Resume/>}
                        {section === 'education' && <Education/>}
                        {section === 'certifications' && <Certificates/>}
                    </main>
                </section>
            </div>
            </ReactFlow>
        </div>
    )
}


export default AboutSection;