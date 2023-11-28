import { AiFillPicture } from "react-icons/ai"

const DefaultPicture = () => {
    return(
        <div className="bg-[#1f1f1f] w-full h-full flex justify-center items-center">
            <AiFillPicture size={30} className="text-[#393939]"/>
        </div>
    )
}
export default DefaultPicture