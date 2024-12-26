'use client';
import {usePathname} from 'next/navigation';
import { VscTriangleDown } from "react-icons/vsc";
import Link from 'next/link';

export default function MenuLinks(){
    const pathname = usePathname();

    const categories = [
        {name: 'entertainment', link: '/entertainment', id: 1},
        {name: 'technology', link: '/technology', id: 2},
        {name: 'politics', link: '/politics', id: 3},
        {name: 'sport', link: '/sport', id: 4},
        {name: 'business', link: '/business', id: 5}
    ]
    return(
        <>
            <Link
                className={`${pathname === '/'? 'text-primaryColor' : 'text-secondaryColor-300'} w-fit block py-[1.4rem] h-full hover:text-primaryColor transition duration-300 ease-in-out`}
                href='/'
            >
                home
            </Link>
            <Link
                className={`${pathname === '/about'? 'text-primaryColor' : 'text-secondaryColor-300'} w-fit block py-[1.4rem] h-full hover:text-primaryColor transition duration-300 ease-in-out`}
                href='/about'
            >
                about
            </Link>
            <div
                className={` w-fit h-full group py-[1.4rem] cursor-pointer relative hover:text-primaryColor transition duration-300 ease-in-out`}
            >
                <div
                    className="flex items-center gap-2"
                >
                    <span>
                        category
                    </span>
                    <span
                        className="text-sm text-secondaryColor-100"
                    >
                        <VscTriangleDown />
                    </span>
                </div>
                <div
                    className="absolute w-[20vw] hidden group-hover:block top-[4rem] rounded-sm z-50 px-4 border border-secondaryColor-100  bg-white animate-slide-in"
                >
                    {
                        categories.map((category)=>(
                            <Link
                                className={`${pathname === category.link ? 'text-primaryColor' : 'text-secondaryColor-300'} hover:text-primaryColor block text-lg py-2 border-b border-secondaryColor-100 transition duration-300 ease-linear`}
                                href={category.link}
                                key={category.id}
                            >
                                {category.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Link
                className={`${pathname === '/contact'? 'text-primaryColor' : 'text-secondaryColor-300'} w-fit block py-[1.4rem] h-full hover:text-primaryColor transition duration-300 ease-in-out`}
                href='/contact'
            >
                contact
            </Link>
        </>
    )
}