import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { shareButtonProp } from "../../../types";

export default function ShareButtons({pathname, baseURL, title}: shareButtonProp){
    const slugify = (title: string) => {
        return title.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
    }

    return(
        <div
            className="mb-8 md:mb-0 border border-secondaryColor-100 rounded p-4 md:p-0"
        >
            <p
                className="md:hidden mb-2" 
            >
                Share to social media:
            </p>
            <div
                className="flex md:block items-center gap-2 justify-start flex-wrap"
            >
                <span
                    className="hidden md:block md:p-1 lg:p-4 text-center md:border-b border-secondaryColor-100"
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
                </span>
                <Link
                    href={`mailto:?subject=${slugify(title)}&body=Check out this article: ${baseURL}${pathname}`}
                    className="flex capitalize cursor-pointer text-secondaryColor-100 hover:text-primaryColor items-center justify-start gap-2 md:border-b border-secondaryColor-100 md:p-1 lg:p-4 transition duration-300 ease-linear"
                >
                    <span
                        className="w-fit text-3xl"
                    >
                        <MdEmail />
                    </span>
                    <span
                        className=" hidden md:inline-block w-fit"
                    >
                        email
                    </span>
                </Link>
                <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${baseURL}${pathname}`}
                    target="_blank"
                    className="flex capitalize cursor-pointer text-secondaryColor-100 hover:text-primaryColor items-center justify-start gap-2 md:border-b border-secondaryColor-100 md:p-1 lg:p-4 transition duration-300 ease-linear"
                >
                    <span
                        className="w-fit text-3xl"
                    >
                        <FaFacebookF />
                    </span>
                    <span
                        className=" hidden md:inline-block w-fit"
                    >
                        facebook
                    </span>
                </Link>
                <Link
                    href={`https://twitter.com/intent/tweet?url=${baseURL}${pathname}&text=${slugify(title)}`}
                    target="_blank"
                    className="flex capitalize cursor-pointer text-secondaryColor-100 hover:text-primaryColor items-center justify-start gap-2 md:border-b border-secondaryColor-100 md:p-1 lg:p-4 transition duration-300 ease-linear"
                >
                    <span
                        className="w-fit text-3xl"
                    >
                        <FaTwitter />
                    </span>
                    <span
                        className=" hidden md:inline-block w-fit"
                    >
                        twitter
                    </span>
                </Link>
                <Link
                    href={`https://wa.me/?text=${slugify(title)}%20${baseURL}${pathname}`}
                    target="_blank"
                    className="flex capitalize cursor-pointer text-secondaryColor-100 hover:text-primaryColor items-center justify-start gap-2 md:border-b border-secondaryColor-100 md:p-1 lg:p-4 transition duration-300 ease-linear"
                >
                    <span
                        className="w-fit text-3xl"
                    >
                        <FaWhatsapp />
                    </span>
                    <span
                        className=" hidden md:inline-block w-fit"
                    >
                        whatsapp
                    </span>
                </Link>
                <Link
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${baseURL}${pathname}&title=${slugify(title)}`}
                    target="_blank"
                    className="flex capitalize cursor-pointer text-secondaryColor-100 hover:text-primaryColor items-center justify-start gap-2 md:border-b border-secondaryColor-100 md:p-1 lg:p-4 transition duration-300 ease-linear"
                >
                    <span
                        className="w-fit text-3xl"
                    >
                        <FaLinkedinIn />
                    </span>
                    <span
                        className=" hidden md:inline-block w-fit"
                    >
                        linkedIn
                    </span>
                </Link>
            </div>
            
        </div>
    )
    
}