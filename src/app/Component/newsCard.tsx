import Image from "next/image"
import { newsCardProp } from "../../../types"
import { FaShare } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import Link from "next/link"
import { CSSProperties } from "react";

export default function NewsCard({
    display='block', 
    showShares=true, 
    showTag=true, 
    news, 
    mobileWidth='100%', 
    cardWidth="100%", 
    imageWidth="w-[100%]", 
    descWidth="w-[100%]", 
    showTitle= true, 
    showAuthor=true
}:newsCardProp){

    return(
        <div
            className={`${display} w-[var(--mobile)] mb-8 lg:w-[var(--width)] items-start justify-between text-secondaryColor-300`}
            style={{'--width': cardWidth, '--mobile': mobileWidth} as CSSProperties}
        >
            <Link
                className={`${imageWidth} block hover:contrast-75 relative mb-4 transition duration-300 ease-linear`}
                href='#'
            >
                <Image
                    src='/assets/images/myPhoto.jpg'
                    className="w-full"
                    layout="responsive"
                    width={16}
                    height={9}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="image not available" 
                />
            </Link>
            <div
                className={`${descWidth}`}
            >
                {showTag &&
                    <span
                        className="uppercase text-sm block font-normal text-secondaryColor-100"
                    >
                        must read
                    </span>
                }
                {showTitle &&
                    <h1
                        className="mb-2 capitalize text-3xl font-bold hover:text-primaryColor transition duration-300 ease-linear"
                    >
                        <Link
                            href=''
                        >
                            {news.title}
                        </Link>
                    </h1>
                }
                {showTitle=== true? 
                    <p
                        className={`mb-2`}
                    >
                        {news.desc}
                    </p>
                    :
                    <p
                        className={`hover:text-primaryColor transition duration-300 ease-linear`}
                    >
                        <Link
                            href='#'
                        >
                            {news.desc}
                        </Link>
                    </p>

                }
                {showAuthor &&
                    <p
                        className="mb-2 flex items-center gap-2"
                    >
                        <span>By</span>
                        <Link
                            href='#'
                            className="text-primaryColor capitalize hover:underline transition duration-300 ease-linear"
                        >
                            {news.author}
                        </Link>
                    </p>
                }
                {showShares &&
                    <div
                        className="flex items-center w-fit px-2 py-2 justify-between gap-4 border border-secondaryColor-100 rounded-sm"
                    >
                        <div
                            className="flex cursor-pointer items-center gap-2 w-[45%] hover:text-primaryColor animation duration-300 ease-linear"
                        >
                            <span
                                className="w-fit text-secondaryColor-100  hover:text-primaryColor animation duration-300 ease-linear"
                            >
                            <FaShare />
                            </span>
                            <span>35</span>

                        </div>
                        <div
                            className="flex cursor-pointer items-center gap-2 w-[45%] hover:text-primaryColor animation duration-300 ease-linear"
                        >
                            <span
                                className="w-fit text-secondaryColor-100  hover:text-primaryColor animation duration-300 ease-linear"
                            >
                            <FaComment />
                            </span>
                            <span>40</span>

                        </div>
                    </div>
                }
                {showShares === false && 
                    <p
                        className="text-secondaryColor-100"
                    >
                        {news.date}
                    </p>
                }
            </div>
        </div>
    )
}