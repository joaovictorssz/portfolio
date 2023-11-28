import { ReactNode } from "react";

export interface ProjectListTypes {
        title: string,
        picture: null | string ,
        description: string,
        github_url: string,
        deploy_url:string,
        technologies: string[],
        icons: ReactNode[]
}