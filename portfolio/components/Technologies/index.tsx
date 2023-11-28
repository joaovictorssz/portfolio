import TechItem from "../TechItem";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="w-full px-6">
            {/** Mobile visualization first */}


        <div className="md:hidden flex flex-col items-center">
            <h1 className="font-semibold text-xl my-3">Technologies that im use to work with</h1>
            <main className="md:hidden p-3 py-12  gap-y-6 rounded w-full grid grid-cols-2">

                <span className="place-self-center">
                    <TechItem icon={<IoLogoJavascript size={40}/>} description="Js" title="Javascript"/>
                </span>

                <span className="place-self-center">
                    <TechItem icon={<FaCss3Alt size={40}/>} description="Js" title="CSS3"/>
                </span>

                <span className="place-self-center">
                    <TechItem icon={<FaHtml5 size={40}/>} description="Js" title="HTML5"/>
                </span>

                <span className="place-self-center">
                    <TechItem icon={<SiTypescript size={40}/>} description="Ts" title="Typesctipt"/>
                </span>

                <span className="place-self-center">
                    <TechItem icon={<FaNode size={40}/>} description="Ts" title="Node.js"/>
                </span>

                <span className="place-self-center">
                    <TechItem icon={<FaReact size={40}/>} description="Ts" title="ReactJS"/>
                </span>

                <span className="place-self-center">
                    <TechItem icon={<SiNextdotjs size={40}/>} description="Ts" title="Next.js"/>
                </span>

                <span className="place-self-center">
                    <TechItem icon={<SiTailwindcss size={40}/>} description="Ts" title="Tailwind"/>
                </span>

                <span className="place-self-center">
                    <TechItem icon={<FaGitAlt size={40}/>} description="Ts" title="Git"/>
                </span>

                <span className="place-self-center">
                    <TechItem icon={<FaDocker size={40}/>} description="Ts" title="Docker"/>
                </span>


            </main>

        </div>
        
        {}

        </div>
    )
}

export default Technologies;