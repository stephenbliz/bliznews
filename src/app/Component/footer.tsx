'use client';
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { CSSProperties } from "react";

export default function Footer(){
    const pathname = usePathname();
    const categories = [
        {name: 'entertainment', link: '/entertainment', id: 1},
        {name: 'technology', link: '/technology', id: 2},
        {name: 'politics', link: '/politics', id: 3},
        {name: 'sport', link: '/sport', id: 4},
        {name: 'business', link: '/business', id: 5}
    ]
    const abouts = [
        {name: 'about us', link: '#', id: 1},
        {name: 'our team', link: '#', id: 2},
        {name: 'careers', link: '#', id: 3},
        {name: 'advertise', link: '#', id: 4},
        {name: 'copyright', link: '#', id: 5}
    ]
    const medias = [
            {icon: <FaFacebookF />, colour: `#1773EA`, id: 1},
            {icon: <FaTwitter />, colour: `#1C9CEA`, id: 2},
            {icon: <TfiGoogle />, colour: '#D02C1F', id: 3},
            {icon: <FaLinkedinIn />, colour: '#0073AE', id: 4},
            {icon: <FaPinterest />, colour: '#B6081A', id: 5}, 
        ];
    return(
        <footer
            className="bg-secondaryColor-400 mt-[3rem] pt-4 lg:pt-0"
        >
           <div
            className="p-[1rem] lg:p-[4rem] lg:grid grid-cols-3 items-start "
           >
                <div
                    className="col-span-1 mb-8 lg:mb-0"
                >
                    <Link
                        href='/'
                        className="w-fit flex items-center gap-2 text-primaryColor mb-4"
                    >
                        <span
                            className="text-[2rem] rotate-[45deg]"
                        >
                            <HiOutlineNewspaper />
                        </span>
                        <span
                            className="text-[1.3rem] spacing tracking-[.5rem] font-bold"
                        >
                            BLIZNEWS
                        </span>
                    </Link>
                    <p
                        className="border-b border-secondaryColor-300 mb-8 text-secondaryColor-100 pr-8 pb-8 text-lg"
                    >
                        This pays especially well in technology, where you earn a premium 
                        for working fast.
                    </p>
                    <div>
                        <h3
                            className="text-white font-bold capitalize mb-4"
                        >
                            follow us
                        </h3>
                        <div
                            className={`flex items-center justify-start gap-2 mb-4 transition duration-300 ease-in-out`}
                        >
                            {
                                medias.map((media) => (
                                    <Link
                                        href='#'
                                        key={media.id}
                                        className='hover:text-[var(--color)] text-secondaryColor-100 border rounded border-[#b0acac55] bg-secondaryColor-300 p-2 text-xl transition duration-300 ease-linear'
                                        style={{'--color': media.colour} as CSSProperties}
                                    >
                                        {media.icon}
                                    </Link>
                                ))
                            }
                        </div>
                        <Link
                            className="text-secondaryColor-100 text-sm hover:text-primaryColor transition duration-300 ease-linear"
                            href='#'
                        >
                            hello@youraddress.com
                        </Link>
                    </div>
                </div>
                <div
                    className="col-span-1 mb-8 lg:mb-0"
                >
                    <h3
                        className="text-white font-bold capitalize mb-4"
                    >
                        twitter
                    </h3>
                </div>
                <div
                    className="col-span-1 lg:flex items-center justify-between "
                >
                    <div
                        className="w-[100%] lg:w-[45%] mb-8 lg:mb-0"
                    >
                        <h3
                            className="text-white font-bold capitalize mb-4"
                        >
                            main
                        </h3>
                        <ul>
                            {
                                categories.map((category)=>(
                                    <Link
                                        className={`${pathname === category.link ? 'text-primaryColor' : 'text-secondaryColor-100'} hover:text-primaryColor block capitalize text-sm py-3 border-b border-secondaryColor-300 transition duration-300 ease-linear`}
                                        href={category.link}
                                        key={category.id}
                                    >
                                        <li>
                                            {category.name}
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                    <div
                        className="w-[100%] lg:w-[45%] mb-4 lg:mb-0"
                    >
                        <h3
                            className="text-white font-bold capitalize mb-4"
                        >
                            about us
                        </h3>
                        <ul>
                            {
                                abouts.map((about)=>(
                                    <Link
                                        className={`${pathname === about.link ? 'text-primaryColor' : 'text-secondaryColor-100'} hover:text-primaryColor block capitalize text-sm py-3 border-b border-secondaryColor-300 transition duration-300 ease-linear`}
                                        href={about.link}
                                        key={about.id}
                                    >
                                        <li>
                                            {about.name}
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>
           </div>
           <p
            className="p-[1rem] bg-[#212121] lg:px-[4rem] text-secondaryColor-100"
           >
            &copy; 2024 BLIZNEWS, Inc.
           </p>
        </footer>
    )
}