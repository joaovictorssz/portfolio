import Link from "next/link"


const NavLink = ({href, title}: {href: string, title: string}) => {

    function scrollToDiv(){

        const targetSection = document.getElementById(href);

        console.log(href)
        window.scrollTo({
            top: targetSection?.offsetTop,
            behavior: 'smooth'
        })
    }

    return(
        <button onClick={()=>scrollToDiv()} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white transition-colors">
            {title}
        </button>
    )
}
export default NavLink;