import ExperienceItem from "../ExperienceItem"

const SIDIA_EXPERIENCE = `During my time with the Google Approval team, I served as the primary Front-End Developer, playing a crucial role in constructing and maintaining two automated smartphone testing systems.`
const DPE_EXPERIENCE = `As an intern at the Public Defender's Office of Amazonas in the IT department, I collaborated within a development team responsible for enhancing the SOLAR system utilized by attorneys and defenders.`

const Experience = () => {

    

    return(
        <div className="py-32 px-12 md:px-48 w-full flex flex-col lg:flex-row md:justify-between">

            <section className="lg:w-2/5 px-6 mb-6">
                <h1 className="font-extrabold text-xl md:text-2xl lg:text-3xl">Experiences</h1>

                <div className="flex lg:flex-row  lg:space-y-0 justify-between mt-6">
                    <span data-aos="fade-up" data-aos-delay={100} className="flex flex-col items-center">
                        <p><span className="text-purple-500 text-3xl">+</span><strong className="text-3xl">5</strong> years</p>
                        <p className="text-sm">Studying</p>
                    </span>

                    <span data-aos="fade-up" data-aos-delay={200} className="flex flex-col items-center">
                        <p className=""><span className="text-purple-500 text-3xl">+</span><strong className="text-3xl">3</strong> years</p>
                        <p className="text-sm">Working</p>
                    </span>

                    <span data-aos="fade-up" data-aos-delay={300} className="flex flex-col items-center">
                        <p><span className="text-purple-500 text-3xl">+</span><strong className="text-3xl">60</strong>%</p>
                        <p className="text-sm">Positive impact</p>
                    </span>
                </div>
            </section>

            <section className="lg:w-3/5 flex flex-col space-y-3">
                <ExperienceItem 
                company="SIDIA - Research and Development Institute"
                init_date="DECEMBER 2018"
                 end_date="PRESENT"
                  role="Front-end Developer"
                   description={SIDIA_EXPERIENCE}
                    skills={['ReactJS', 'Next.js', 'Tailwind CSS', 'Python', 'Node.js', 'MongoDB', 'Docker']}/>

            <ExperienceItem 
                company="Defensoria Pública do Estado do Amazonas"
                init_date="MARCH"
                 end_date="DECEMBER 2018"
                  role="IT Inter"
                   description={DPE_EXPERIENCE}
                    skills={['Javascript', 'ReactJS', 'Python', 'Docker']}/>
            </section>

        </div>
    )


}

export default Experience