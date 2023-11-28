'use client'

/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import laptop from '@/public/laptop.svg'
import {TypeAnimation} from 'react-type-animation'

const HeroSection = () => {
    return(
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 h-screen relative">
                <div className="col-span-1 lg:col-span-8 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 sm:text-5xl text-4xl lg:text-6xl font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Hello, I'm {""}</span>
                    <br />
                    <TypeAnimation
                    deletionSpeed={40}
                    preRenderFirstString
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'J. Victor Picanço',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Front-end Developer',
                        1000,
                        'Back-end Developer',
                        1000,
                        'UX/UI Designer',
                        1000
                    ]}
                    wrapper="span"
                    speed={20}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl">
                    Lover of music, modern APIs and beautiful screens.
                    <br />
                    4 year of hands-on development of web applications using Javascript ecossystem.
                </p>
                <div className="my-6">
                    <button className="w-full sm:w-fit rounded-full px-6 py-3 mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mb-2 font-semibold">Hire me!</button>
                    <button className="w-full sm:w-fit rounded-full  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mb-2 font-semibold p-1 hover:shadow-md shadow-purple-200">
                        <div className="bg-[#121212] rounded-full w-full h-full px-5 py-2">
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                Download CV
                            </p>
                        </div>
                    </button>
                </div>
                </div>
 
            </div>
        </section>
    )
}

export default HeroSection;