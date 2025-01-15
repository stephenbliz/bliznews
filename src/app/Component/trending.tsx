import Link from "next/link";
import { trendingNewsProp } from "../../../types";
import Image from "next/image";
import Loading from "./loading";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function TrendingNews({news, error, loading}:trendingNewsProp){
    const filteredNews = news?.filter((item)=>item.title !== "")
    console.log('filtered:', filteredNews);
    return(
        <div>
            <h1
                className={`text-2xl text-secondaryColor-300 font-bold capitalize mb-4 `}
            >
                trending USA
            </h1>
            {news.length>0&&
                <div
                    className="flex items-start justify-between gap-y-[1.5rem] flex-wrap"
                >
                {
                    filteredNews.map((item, index)=>(
                        <div
                            key={index}
                            className="lg:w-[32%] md:w-[48%] w-full border-b pb-4 border-secondaryColor-100"
                        >
                            <Link
                                className="w-full mb-2 hover:brightness-[.8] transition duration-300 ease-linear"
                                href=''
                            >
                                <Image 
                                    alt={item.title}
                                    height={150}
                                    width={300}
                                    src={`${item.top_image=== ''? '/assets/images/newsImage.webp' : item.top_image}`}
                                    className="w-full"
                                />
                            </Link>
                            <span
                                className="block mb-2 text-secondaryColor-100"
                            >
                                {dayjs(item.date).fromNow()}
                            </span>
                            <h1
                                className="font-bold mb-2 text-[1rem] hover:text-primaryColor transition duration-300 ease-linear"
                            >
                                <Link
                                    href=''
                                >
                                    {item.title}
                                </Link>
                            </h1>
                        </div>
                    ))
                }
                </div>
            }
            {loading &&
                <div>
                    <Loading />
                </div>
            }
            {error&&
                <div
                    className="text-center m-auto"
                >
                    {error}
                </div>
            }
        </div>
    )
}