import Link from "next/link";

export default function Advertisement(){
    return(
        <div
            className="relative"
        >
        <Link
            href=''
            className="block  uppercase w-full bg-secondaryColor-100 mb-10 text-white text-[12rem] text-center p-4 font-bold"
        >
            Ad
        </Link>
        <span
            className="capitalize absolute -bottom-5 text-sm text-secondaryColor-100 right-0"
        >
            advertisement
        </span>
        </div>
    )
}