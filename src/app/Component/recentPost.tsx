'use client';
import Link from "next/link";
import { RecentPostProp } from "../../../types";
import Loading from "./loading";
import {motion} from 'framer-motion';
import { sectionAnimate } from "../utils/animation";


export default function RecentPost({news, loading}: RecentPostProp){
    const newsIndex = [8, 7, 3, 1, 5];

    const filteredNews = news.filter((_, index)=> newsIndex.includes(index));

    const slugify = (title: string) => {
        return title.toLocaleLowerCase().trim().replace(/[\s\W-]+/g, '-');
    }
    return(
        <motion.div
            className="border border-secondaryColor-100 rounded p-6 mb-8"
            variants={sectionAnimate}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
        >
            {loading?
                <div>
                    <Loading />
                </div>
                :
                <div>
                    <h1
                        className={`text-xl font-heading md:text-2xl text-primaryColor font-bold capitalize mb-4 `}
                    >
                        recent post
                    </h1>
                    <ol
                        className="list-decimal px-4 "
                    >
                        {
                            filteredNews.map((item)=>(
                                <li
                                    className="hover:text-primaryColor transition duration-300 ease-linear py-4 text-center border-b last:border-b-0 border-secondaryColor-100"
                                    key={item.article_id}
                                >
                                    <Link
                                        href={`/news/${slugify(item.title)}`}
                                        className=""
                                    >
                                        {item.description?.substring(0, 60)}...
                                    </Link>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            }
            
        </motion.div>
    )
}