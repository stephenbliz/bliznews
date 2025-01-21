'use client';
import { CSSProperties, useState} from "react";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { RiTriangleFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from 'next/link';
import MobileMenu from "./mobileMenu";


export default function Nav1(){
    const [search, setSearch] = useState('');
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const medias = [
            {title: 'Follow us on Facebook', icon: <FaFacebookF />, colour: `#1773EA`, id: 1},
            {title: 'Follow us on Twitter', icon: <FaTwitter />, colour: `#1C9CEA`, id: 2},
            {title: 'Follow us on Google', icon: <TfiGoogle />, colour: '#D02C1F', id: 3},
            {title: 'Follow us on LinkedIn', icon: <FaLinkedinIn />, colour: '#0073AE', id: 4},
            {title: 'Follow us on Pinterest', icon: <FaPinterest />, colour: '#B6081A', id: 5}, 
        ];

    const handleOpenMenu = ()=>{
        setOpenMenu(!openMenu);
    }

    return(
        <nav
            className="h-[7rem] relative lg:h[5rem] bg-primaryColor px-[1rem] text-white md:px-[4rem] flex items-center justify-between"
        >
            <div
                className="flex items-center gap-3 w-[45%]"
            >
                <Link
                    href='/'
                    className="w-fit flex items-center gap-2"
                >
                    <span
                        className="text-[3rem] rotate-[45deg]"
                    >
                        <HiOutlineNewspaper />
                    </span>
                    <span
                        className="text-[1.5rem] spacing tracking-[.5rem] font-bold"
                    >
                        BLIZNEWS
                    </span>
                </Link>
                <div
                    className="hidden group py-6 relative items-center cursor-pointer gap-1 lg:flex capitalize"
                >
                    <span>
                        follow us
                    </span>
                    <span
                        className="text-2xl"
                    >
                        <MdOutlineArrowDropDownCircle />
                    </span>
                    <div
                        className=" absolute hidden group-hover:block z-50 top-[1rem] animate-slide-in"
                    >
                        <div
                            className="absolute top-[3.5rem] left-0 border bg-white border-gray-300 "
                        >
                            {
                                medias.map((media)=>(
                                    <Link
                                        href='#'
                                        className={`flex items-center gap-2 p-4 w-[20vw] mx-1 border-b border-gray-300  text-gray-400 hover:text-[var(--hover-colour)] transition duration-300 ease-linear`}
                                        key={media.id}
                                        style={{'--hover-colour': media.colour} as CSSProperties}
                                    >
                                        <span
                                            className="w-fit"
                                        >
                                            {media.icon}
                                        </span>
                                        <span
                                            className="w-fit text-sm"
                                        >
                                            {media.title}
                                        </span>
                                    </Link>
                                ))
                            }
                        </div>
                        <div
                            className="w-fit absolute text-xl left-[3rem] top-[2.4rem]"
                        >
                            <RiTriangleFill />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-[45%] hidden lg:flex justify-end relative"
            >
                <input 
                    type="text" 
                    name="search" 
                    placeholder="Search"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className="h-[2rem] placeholder:text-gray-300 pl-2 pr-[2.5rem] py-2 rounded w-[60%] outline-none text-gray-600 border border-gray-300 focus:border-gray-400"
                />
                <span
                    className="absolute right-2 top-1 text-2xl cursor-pointer text-gray-400 hover:text-gray-800 transition duration-300 ease-in-out"
                >
                    <IoSearch />
                </span>
            </div>
            <div
                className="block lg:hidden w-fit text-center text-[3rem]"
                onClick={handleOpenMenu}
            >
                {openMenu === false ? <RiMenu2Line /> : <IoClose />}
            </div>
            <MobileMenu 
                openMenu = {openMenu}
                setOpenMenu={setOpenMenu}
            />
        </nav>
    )
}