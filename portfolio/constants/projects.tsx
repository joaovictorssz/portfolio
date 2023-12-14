import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { ProjectListTypes } from "@/@types/project_list.types";
import { SiNestjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import PROJ1 from '@/public/PROJ1.png'
import PROJ2 from '@/public/PROJ2.png'
import PROJ3 from '@/public/PROJ3.png'
export const project_list : ProjectListTypes[] = [
    {

        title: 'This portfolio',
        picture: PROJ1,
        description: 'An website to talk about myself and show some of my projects to the world.',
        github_url: 'http://github.com/joaovictorssz/portfolio',
        deploy_url: '#',
        technologies: ['NextJS', 'Tailwind', 'Typescript'],
        icons: [
            <TbBrandNextjs className="hover:text-purple-500 transition-colors" key={0}/>,
            <SiTailwindcss className="hover:text-purple-500 transition-colors" key={1}/>,
            <BiLogoTypescript className="hover:text-purple-500 transition-colors" key={2}/>
        ]
    
    },
    {

        title: 'Skill.map()',
        picture: PROJ2,
        description: '2nd place at the Inovatech technology fair. App to guide studies for beginners in the tech world.',
        github_url: 'https://github.com/joaovictorssz/skillmap-frontend',
        deploy_url: '#',
        technologies: ['NextJS', 'Tailwind', 'Nest.js'],
        icons: [
            <TbBrandNextjs className="hover:text-purple-500 transition-colors" key={0}/>,
            <SiTailwindcss className="hover:text-purple-500 transition-colors" key={1}/>,
            <SiNestjs className="hover:text-purple-500 transition-colors" key={2}/>
        ]
    
    },
    {

        title: 'Projeto UP',
        picture: PROJ3,
        description: 'A management system for an NGO in Manaus, to assist in helping needy families.',
        github_url: 'https://github.com/joaovictorssz/projeto_up_frontend',
        deploy_url: '#',
        technologies: ['NextJS', 'Tailwind', 'Node.js'],
        icons: [
            <TbBrandNextjs className="hover:text-purple-500 transition-colors" key={0}/>,
            <SiTailwindcss className="hover:text-purple-500 transition-colors" key={1}/>,
            <FaNodeJs  className="hover:text-purple-500 transition-colors" key={2}/>
        ]
    
    },
  
    
]