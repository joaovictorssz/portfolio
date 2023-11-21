import { PiCertificateBold } from "react-icons/pi";

const Certificates = () => {

    return(
        <div>
            

            <div className="flex items-center border border-[#323232] p-4 rounded my-2" >
                <section className="bg-[#323232] rounded p-8 h-fit flex items-center justify-center">
                    <span className="rounded-full">
                        <PiCertificateBold size={24 }/>
                    </span>
                </section>
                <section className="px-4">
                    <h3 className="font-semibold">Data Engineering</h3>
                    <p className="text-sm font-mono italic opacity-70">CIEE - Centro de Integração Empresa-Escola</p>
                    <p className="text-sm font-mono font-semibold opacity-70">Computer Engineering - Big data - Data analysis</p>
                </section>
                

            </div>

            <div className="flex items-center border border-[#323232] p-4 rounded my-2" >
                <section className="bg-[#323232] rounded p-8 h-fit flex items-center justify-center">
                    <span className="rounded-full">
                        <PiCertificateBold size={24 }/>
                    </span>
                </section>
                <section className="px-4">
                    <h3 className="font-semibold">Entrepreneurship - Financial Education</h3>
                    <p className="text-sm font-mono italic opacity-70">CIEE - Centro de Integração Empresa-Escola</p>
                    <p className="text-sm font-mono font-semibold opacity-70">Entrepreneurship - Economy</p>
                </section>
                

            </div>

            <div className="flex items-center border border-[#323232] p-4 rounded my-2" >
                <section className="bg-[#323232] rounded p-8 h-fit flex items-center justify-center">
                    <span className="rounded-full">
                        <PiCertificateBold size={24 }/>
                    </span>
                </section>
                <section className="px-4">
                    <h3 className="font-semibold">Semana OmniStack 11</h3>
                    <p className="text-sm font-mono italic opacity-70">Rocketseat</p>
                    <p className="text-sm font-mono font-semibold opacity-70">ReactJS - Node.js</p>
                </section>
                

            </div>


        </div>
    )

}

export default Certificates;