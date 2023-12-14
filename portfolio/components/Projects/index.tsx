import { project_list } from "@/constants/projects";
import ProjectItem from "../ProjectItem";

const Projects = () => {
    return(
        <div className="w-full h-fit flex flex-col items-center">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-extrabold">Here are some of my projects</h1>
            <main className="w-full h-full flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 p-12">
            {project_list.map((project, index)=>{
                return (
                <div key={index} className="place-self-center" data-aos="fade-up" data-aos-delay={(index)*120}>
                    <ProjectItem 
                    deploy_url={project.deploy_url}
                     description={project.description}
                     github_url={project.github_url}
                     picture={project.picture}
                     icons={project.icons}
                     technologies={project.technologies}
                     title={project.title}
                     
                     />
                </div>)
            })}
            </main>
        </div>
    )
}

export default Projects;