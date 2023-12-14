import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ProjectListTypes {
        title: string,
        picture: null | StaticImageData ,
        description: string,
        github_url: string,
        deploy_url:string,
        technologies: string[],
        icons: ReactNode[]
}