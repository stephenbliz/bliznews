import Image from "next/image"
import { newsCardProp } from "../../../types"
import { FaShare } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import Link from "next/link"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CSSProperties } from "react";

dayjs.extend(relativeTime);

export default function NewsCard({
    display='block',
    showShares=true, 
    showTag=true, 
    path='/news',
    news, 
    mobileWidth='100%', 
    cardWidth="100%", 
    imageWidth="w-[100%]", 
    descWidth="w-[100%]", 
    showTitle= true, 
    showAuthor=true,
    titleFont = 'text-[1rem] md:text-lg'
}:newsCardProp){

    const slugify = (title: string) => {
        return title.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
    }

    return(
        <>
        {news &&<div
            className={`${display} w-[var(--mobile)] mb-8 lg:w-[var(--width)] items-start justify-between text-secondaryColor-300`}
            style={{'--width': cardWidth, '--mobile': mobileWidth} as CSSProperties}
        >
            <Link
                className={`${imageWidth} block hover:contrast-75 relative mb-4 transition duration-300 ease-linear`}
                href={`${path}/${slugify(news.title)}`}
            >
                <Image
                    src={`${news.image_url === null ? '/assets/images/newsImage.webp': news.image_url}`}
                    className="w-full"
                    width={16}
                    height={9}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={news.title} 
                />
            </Link>
            <div
                className={`${descWidth}`}
            >
                {showTag &&
                    <span
                        className="uppercase text-[.7rem] block font-normal text-secondaryColor-100"
                    >
                        {news.category}
                    </span>
                }
                {showTitle &&
                    <h1
                        className={`mb-2 capitalize ${titleFont} font-heading font-bold hover:text-primaryColor transition duration-300 ease-linear`}
                    >
                        <Link
                            href={`${path}/${slugify(news.title)}`}
                        >
                            {news.title}
                        </Link>
                    </h1>
                }
                {showTitle=== true? 
                    <p
                        className={`mb-2`}
                    >
                        {news.description?.substring(0,60)}...
                    </p>
                    :
                    <p
                        className={`hover:text-primaryColor transition duration-300 ease-linear`}
                    >
                        <Link
                            href={`${path}/${slugify(news.title)}`}
                        >
                            {news.description?.substring(0,60)}...
                        </Link>
                    </p>

                }
                {showAuthor &&
                    <div
                        className="mb-2 flex items-center w-fit gap-2"
                    >
                        <span>By</span>
                        <Link
                            href={`${path}/${slugify(news.title)}`}
                            className="text-primaryColor capitalize hover:underline transition duration-300 ease-linear"
                        >
                            {news.creator}
                        </Link>
                    </div>
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
                    <div
                        className="text-secondaryColor-100 text-[.8rem] w-fit"
                    >
                        {dayjs(news.pubDate).fromNow()}
                    </div>
                }
            </div>
        </div>}
        </>
    )
}