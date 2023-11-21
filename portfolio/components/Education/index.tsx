import { FaSchool } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
const Education = () => {
    return (
        <div>
            
            <div className="flex items-center border border-[#323232] p-4 rounded my-2" >
                <section className="bg-[#323232] rounded p-4 h-fit flex items-center justify-center">
                    <span className="rounded-full">
                        <FaSchool size={16}/>
                    </span>
                </section>
                <section className="px-4">
                    <h3 className="font-semibold">High School</h3>
                    <p className="text-sm font-mono italic opacity-70">Escola Estadual Nossa Senhora de Nazaré</p>
                </section>
            </div>

            <div className="flex items-center border border-[#323232] p-4 rounded my-2" >
                <section className="bg-[#323232] rounded p-4 h-fit flex items-center justify-center">
                    <span className="rounded-full">
                        <IoSchool size={16}/>
                    </span>
                </section>
                <section className="px-4">
                    <h3 className="font-semibold">Bachelors Computer Engineering</h3>
                    <p className="text-sm font-mono italic opacity-70">Universidade Estadual do Amazonas</p>
                </section>
                

            </div>

            <div className="flex items-center border border-[#323232] p-4 rounded my-2" >
                <section className="bg-[#323232] rounded p-4 h-fit flex items-center justify-center">
                    <span className="rounded-full">
                        <IoSchool size={16}/>
                    </span>
                </section>
                <section className="px-4">
                    <h3 className="font-semibold">Systems Analysis and Development</h3>
                    <p className="text-sm font-mono italic opacity-70">Fametro</p>
                </section>
                

            </div>

        </div>
    )
}

export default Education