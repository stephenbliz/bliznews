import {usePathname} from 'next/navigation';
import { VscTriangleDown } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from 'next/link';
import { CSSProperties, useState } from 'react';

interface mobileMenuProp{
    openMenu: boolean
}

export default function MobileMenu({openMenu}:mobileMenuProp){
    const pathname = usePathname();
    const [drop, setDrop] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [search, setSearch] = useState('');

    const categories = [
        {name: 'entertainment', link: '/entertainment', id: 1},
        {name: 'technology', link: '/technology', id: 2},
        {name: 'politics', link: '/politics', id: 3},
        {name: 'sport', link: '/sport', id: 4},
        {name: 'business', link: '/business', id: 5}
    ];
    const medias = [
        {icon: <FaFacebookF />, colour: `#1773EA`, id: 1},
        {icon: <FaTwitter />, colour: `#1C9CEA`, id: 2},
        {icon: <TfiGoogle />, colour: '#D02C1F', id: 3},
        {icon: <FaLinkedinIn />, colour: '#0073AE', id: 4},
        {icon: <FaPinterest />, colour: '#B6081A', id: 5}, 
    ];

    const handleDrop = () =>{
        setDrop(!drop)
    }
    const handleOpenSearch = ()=>{
        setOpenSearch(true);
    }

    return(
        <div
            className={`${openMenu? 'block':'hidden'} absolute lg:hidden w-[100vw] h-[100vh] top-[7rem] left-0 animate-pull-down`}
        >
            <div
                className="text-center capitalize text-2xl text-white flex flex-col items-center justify-between"
            >
                <Link
                    className={`${pathname === '/'? 'text-primaryColor' : 'text-white'} bg-[#060505c5] border-b border-[#b0acac35] w-full block py-[1.4rem] h-full hover:text-primaryColor transition duration-300 ease-in-out`}
                    href='/'
                >
                    home
                </Link>
                <Link
                    className={`${pathname === '/about'? 'text-primaryColor' : 'text-white'} bg-[#060505c5] border-b border-[#b0acac35] w-full block py-[1.4rem] h-full hover:text-primaryColor transition duration-300 ease-in-out`}
                    href='/about'
                >
                    about
                </Link>
                <div
                    className={` ${drop? 'font-bold' : 'font-normal'} relative flex items-center justify-center gap-6 border-b border-[#b0acac25] bg-[#060505c5] w-full py-[1.4rem] h-full transition duration-300 ease-in-out`}
                >
                    <span>
                        category
                    </span>
                    <span
                        className={`${drop? 'rotate-[360deg]': 'rotate-[-90deg]'} absolute right-8 text-lg text-white`}
                        onClick={handleDrop}
                    >
                        <VscTriangleDown />
                    </span>
                </div>
                <div
                    className={`${drop? 'flex' : 'hidden'} w-full h-fit flex-col items-center justify-between  animate-pull-down transition duration-300 ease-linear`}
                >
                    {
                        categories.map((category)=>(
                            <Link
                                className={`${pathname === category.link ? 'text-primaryColor' : 'text-white'} bg-[#060505b5] border-b border-[#b0acac20] w-full block py-[1.4rem] h-full hover:text-primaryColor transition duration-300 ease-in-out`}
                                href={category.link}
                                key={category.id}
                            >
                                {category.name}
                            </Link>
                        ))
                    }
                </div>
                <Link
                    className={`${pathname === '/contact'? 'text-primaryColor' : 'text-white'} bg-[#060505c5] border-b border-[#b0acac35] w-full block py-[1.4rem] h-full hover:text-primaryColor transition duration-300 ease-in-out`}
                    href='/contact'
                >
                    contact
                </Link>
                <div
                    className={`flex items-center justify-center gap-2 border-b border-[#b0acac25] bg-[#060505c5] w-full py-[1.4rem] h-full transition duration-300 ease-in-out`}
                >
                    <label 
                        htmlFor="search"
                        className='w-15% text-4xl'
                        onClick={handleOpenSearch}
                    >
                        <IoSearch />
                    </label>
                    <input 
                        type="text"
                        className={`${openSearch? 'inline-block' : 'hidden'} p-2 outline-none bg-transparent w-[60%] text-[1.2rem] font-normal animate-slide-left`}
                        name='search'
                        id='search'
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)} 
                    />
                  
                </div>
                <div
                    className={`flex items-center justify-center gap-2 border-b border-[#b0acac25] bg-[#060505c5] w-full py-[1.4rem] h-full transition duration-300 ease-in-out`}
                >
                    {
                        medias.map((media) => (
                            <Link
                                href='#'
                                key={media.id}
                                className='text-[var(--color)] border border-[#b0acac55] p-2 text-3xl'
                                style={{'--color': media.colour} as CSSProperties}
                            >
                                {media.icon}
                            </Link>
                        ))
                    }
                </div>
            </div>   
        </div>
    )
}