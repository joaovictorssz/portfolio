import NavLink from "../NavLink"

const MenuOverlay = ({links}: {links: {title: string, href: string}[]}) => {
    return(
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, id)=>{
                return (<li key={id}><NavLink href={link.href} title={link.title}/></li>)
            })}
        </ul>
    )
}

export default MenuOverlay