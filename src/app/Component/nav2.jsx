import MenuLinks from "./menuLink";

export default function Nav2(){

    return(
        <nav
            className="h-[5rem] hidden w-[70%] mx-auto text-secondaryColor-300 lg:flex items-center justify-between justify-items-center px-[4rem] text-2xl capitalize"
        >
            <MenuLinks />
        </nav>
    )
}