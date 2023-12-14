import { ProjectListTypes } from "@/@types/project_list.types"
import DefaultPicture from "../DefaultPicture"
import Image from "next/image"
import Link from "next/link"
import { FaEye, FaGithub } from "react-icons/fa6"

const   ProjectItem = ({deploy_url, description, github_url, icons, picture, technologies, title}: ProjectListTypes) => {
    return (
        <div className=" md:place-self-center flex flex-col px-3 max-w-sm rounded-lg h-[280px] min-h-[280px] my-6 max-h-fit transition-all ease-in-out">
            <section className=" w-full min-h-[200px] relative">
                {!picture && <DefaultPicture/>}
                {picture && <Image className="w-full h-full" src={picture} alt="project picture"/>}

                <Link className="absolute top-2 left-2" href={github_url} target="_blank">    
                    <div className="p-2 rounded-full flex justify-center items-center bg-[#131313] text-white">
                        <FaGithub />
                    </div>
                </Link>

                <div className="flex absolute bottom-2 rounded-full px-3 py-1 space-x-3 bg-[#131313] right-2">
                    {icons.map((icon, index)=>{
                        return icon
                    })}
                </div>
            </section>
            <section className="bg-[#2c2c2c] px-4 py-2 flex">
                <span className="max-h-fit text-ellipsis">
                    <h1 className="font-semibold">{title}</h1>
                    <p className="text-sm text-[#656565]">{description}</p>
                </span>
            </section>
        </div>
    )
}

export default ProjectItem