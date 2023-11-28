import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { ProjectListTypes } from "@/@types/project_list.types";

export const project_list : ProjectListTypes[] = [
    {

        title: 'This portfolio',
        picture: null,
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

        title: 'This portfolio',
        picture: null,
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

        title: 'This portfolio',
        picture: null,
        description: 'An website to talk about myself and show some of my projects to the world.',
        github_url: 'http://github.com/joaovictorssz/portfolio',
        deploy_url: '#',
        technologies: ['NextJS', 'Tailwind', 'Typescript'],
        icons: [
            <TbBrandNextjs className="hover:text-purple-500 transition-colors" key={0}/>,
            <SiTailwindcss className="hover:text-purple-500 transition-colors" key={1}/>,
            <BiLogoTypescript  className="hover:text-purple-500 transition-colors" key={2}/>
        ]
    
    },
  
    
]