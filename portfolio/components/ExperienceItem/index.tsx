const ExperienceItem = (
    {company, description, end_date, init_date, role, skills}:
    {
    init_date: string,
    end_date: string,
    role: string,
    company: string,
    description: string,
    skills: string[]
}
) => {
    return(
        <section data-aos="fade-left" className="flex flex-col md:flex-row justify-around bg-[#141414] p-6 hover:bg-[#1d1d1d] transition-colors rounded">

            <span className="md:w-2/5 mb-3">
                <p className="opacity-75 font-semibold">{init_date} - {end_date}</p>
                
            </span>

            <span className="flex flex-col md:max-w-[60%] px-6">
                <h1 className="font-semibold text-sm md:text-base">{company}</h1>
                <p className="font-semibold opacity-75 mb-6 text-sm md:text-base">{role}</p>

                <p className="text-sm md:text-base">{description}</p>

                <hr className="my-3"/>

                <section className="flex flex-wrap space-x-1">
                {skills.map((skill, index)=>{
                    return <span className="my-1 px-3 py-1 rounded-full text-sm font-semibold text-purple-800 bg-purple-300 w-fit" key={index}>{skill}</span>
                })}
                </section>
            </span>

        </section>
    )
}

export default ExperienceItem