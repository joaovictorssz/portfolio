'use client'

import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import NavLink from "../NavLink";
import {useState} from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import MenuOverlay from "../MenuOverlay";

const Navbar = () => {

    const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false)

    const links : {title: string, href: string}[] = [
        {
            title: "About",
            href: "about"
        },
        {
            title: "Projects",
            href: "projects"
        },
        {
            title: "Contact",
            href: "contact"
        }
    ]

    return (
        <nav className="border-b border-[#2e2e2e] fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 transition-all duration-300 ease-in-out">

            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"} className="text-white font-semibold hover:text-purple-500 transition-colors"><FaHouse/></Link>

                <div className="block md:hidden">
                    {
                        !isNavbarOpen ?
                        <button onClick={()=>setNavbarOpen(true)} className="text-slate-200 flex items-center px-3 py-2 rounded border-slate-200   hover:text-white hover:border-white">
                            <AiOutlineMenu size={20}/>
                        </button> 
                        : 
                        <button onClick={()=>setNavbarOpen(false)} className="text-slate-200 flex items-center px-3 py-2 rounded border-slate-200 hover:text-white hover:border-white">
                            <IoIosClose size={20}/>
                        </button> 
                    }
                </div>

                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                        {links.map((link, id)=>{
                            return <li key={id}><NavLink href={link.href} title={link.title}/></li>
                        })}
                    </ul>
                </div>
            </div>

            {isNavbarOpen && <MenuOverlay links={links}/>}

        </nav>
    )


}

export default Navbar;