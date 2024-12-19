import { HiOutlineNewspaper } from "react-icons/hi2";

export default function Header(){
    return(
        <header
            className="h-[10rem] border-b border-gray-300"
        >
            <nav
                className="h-[5rem] bg-red-600 px-[2rem] sm:px-[4rem] flex items-center justify-between"
            >
                <div
                    className="flex items-center gap-3 w-[45%]"
                >
                    <div
                        className="w-fit flex items-center gap-3"
                    >
                        <span><HiOutlineNewspaper /></span>
                        <span>BLIZNEWS</span>
                    </div>
                    <div
                        className="hidden items-center gap-1 lg:flex"
                    >
                        <span>follow us</span>
                        <span>icon</span>
                    </div>
                </div>

            </nav>
            <nav
                className="h-[5rem] px-[2rem] sm:px-[4rem]"
            >

            </nav>

        </header>
    )
}