
import { ReactNode } from "react";


const TechItem = ({description, icon, title}: {title: string, description: string, icon: ReactNode}) => {
    return(
        <span className="flex flex-col items-center hover:text-purple-500 transition-colors">
            <div className="flex justify-center items-center w-24 h-24 p-3 flex-col border border-[#454444] rounded">
            {icon &&  icon}
        </div>
        <p className="mt-2 opacity-50 font-semibold">{title}</p>
        </span>
    )
}

export default TechItem;