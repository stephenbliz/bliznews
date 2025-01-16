import Image from "next/image"
import dayjs from "dayjs"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import relativeTime from "dayjs/plugin/relativeTime";
import { newsDetailProp } from "../../../types";
import CommentInput from "./commentInput";
import Comment from "./comment";

dayjs.extend(relativeTime);

export default function NewsDetail({imageALT, imageSRC, author, time, title, content, description}: newsDetailProp){
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
                        className="font-bold mb-4 text-2xl text-secondaryColor-300"
                    >
                        {title}
                    </h1>
                    <p
                        className="mb-4"
                    >
                        {description}
                    </p>
                </div>
                <div
                    className="md:grid grid-cols-5 gap-4"
                >
                    <div
                        className="col-span-1"
                    >
                        {content && 
                            <ul
                                className="hidden md:block border border-secondaryColor-100 rounded"
                            >
                                <li
                                    className="p-4 text-center border-b border-secondaryColor-100"
                                >
                                    <span
                                        className="text-secondaryColor-300 block text-5xl font-bold"
                                    >
                                        23
                                    </span>
                                    <span
                                        className="text-lg font-bold block text-secondaryColor-300"
                                    >
                                        shares
                                    </span>
                                </li>
                                <li
                                    className="flex capitalize cursor-pointer text-secondaryColor-100 hover:text-primaryColor items-center justify-start gap-2 border-b border-secondaryColor-100 p-4 transition duration-300 ease-linear"
                                >
                                    <span
                                        className="w-fit"
                                    >
                                        <MdEmail />
                                    </span>
                                    <span
                                        className="w-fit"
                                    >
                                        email
                                    </span>
                                </li>
                                <li
                                    className="flex capitalize cursor-pointer text-secondaryColor-100 hover:text-primaryColor items-center justify-start gap-2 border-b border-secondaryColor-100 p-4 transition duration-300 ease-linear"
                                >
                                    <span
                                        className="w-fit"
                                    >
                                        <FaFacebookF />
                                    </span>
                                    <span
                                        className="w-fit"
                                    >
                                        facebook
                                    </span>
                                </li>
                                <li
                                    className="flex capitalize cursor-pointer text-secondaryColor-100 hover:text-primaryColor items-center justify-start gap-2 border-b border-secondaryColor-100 p-4 transition duration-300 ease-linear"
                                >
                                    <span
                                        className="w-fit"
                                    >
                                        <FaTwitter />
                                    </span>
                                    <span
                                        className="w-fit"
                                    >
                                        twitter
                                    </span>
                                </li>
                                <li
                                    className="flex capitalize cursor-pointer text-secondaryColor-100 hover:text-primaryColor items-center justify-start gap-2 border-b border-secondaryColor-100 p-4 transition duration-300 ease-linear"
                                >
                                    <span
                                        className="w-fit"
                                    >
                                        <FaShare />
                                    </span>
                                    <span
                                        className="w-fit"
                                    >
                                        more
                                    </span>
                                </li>
                            </ul>
                        }
                    </div>
                    <div
                        className="col-span-4"
                    >
                        <div
                            className="border-b-4 border-secondaryColor-100 pb-4"
                        >
                            {content &&
                                <div
                                    className="mb-8 "
                                >
                                    {content}
                                </div>
                            }
                            <div>
                                <Comment />
                                <CommentInput />
                            </div>
                        </div>  
                    </div>
                </div>
        </section>
    )
}