import Image from "next/image";
import dayjs from "dayjs";
import ShareButtons from "./shareButtons";
import relativeTime from "dayjs/plugin/relativeTime";
import { newsDetailProp } from "../../../types";
import CommentInput from "./commentInput";
import Comment from "./comment";
import Link from "next/link";

dayjs.extend(relativeTime);

export default function NewsDetail({
    imageALT, 
    imageSRC, 
    link, 
    author, 
    time, 
    title, 
    content, 
    description, 
    pathname, 
    baseURL
}: newsDetailProp){
    
    return(
        <section
            className="lg:w-[90%] mb-8"
        >
            <div
                className="border-b pb-4 mb-8 border-secondaryColor-100"
            >
                <div
                    className="w-full mb-4"
                >
                    <Image 
                        alt={imageALT}
                        height={150}
                        width={300}
                        src={imageSRC || '/assets/images/newsImage.webp'}
                        className="w-full"
                    />
                </div>
                <div
                    className="flex justify-start items-center gap-2 mb-4" 
                >
                    <span
                        className="w-fit flex justify-start items-start gap-2 text-secondaryColor-100"
                    >
                        <span>By</span>
                        <span
                            className="text-primaryColor capitalize"
                        >
                            {author}
                        </span>
                    </span>
                    <span
                        className="w-fit text-secondaryColor-100"
                    >
                        Published {dayjs(time).fromNow()}
                    </span>
                </div>
                <h1
                    className="font-bold font-heading mb-4 text-xl md:text-2xl text-secondaryColor-300"
                >
                    {title}
                </h1>
                <p
                    className="mb-8"
                >
                    {description}
                </p>
                <div
                    className="mb-8 "
                >
                    <Link
                        href={link}
                        target="blank"
                        className="py-2 px-4 text-lg border border-primaryColor capitalize rounded hover:bg-primaryColor hover:text-white transition duration-300 ease-linear"
                    >
                        read more
                    </Link>
                </div>
            </div>
            <div
                className="md:grid items-start grid-cols-5 gap-4"
            >
                <div
                    className="col-span-1"
                >
                    {content && 
                        <ShareButtons 
                            baseURL={baseURL}
                            pathname={pathname}
                            title={title}
                        />
                    }
                </div>
                <div
                    className="col-span-4"
                >
                    <div
                        className="border-b-4 border-secondaryColor-100 "
                    >
                        <Comment />
                        <CommentInput />
                    </div>  
                </div>
            </div>
        </section>
    )
}