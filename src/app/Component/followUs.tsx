'use client';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { CSSProperties} from 'react';
import {motion} from 'framer-motion';
import { sectionAnimate } from "../utils/animation";

import Link from 'next/link';
export default function FollowUs(){
    const medias = [
        {icon: <FaFacebookF />, colour: `#1773EA`, id: 1},
        {icon: <FaTwitter />, colour: `#1C9CEA`, id: 2},
        {icon: <TfiGoogle />, colour: '#D02C1F', id: 3},
        {icon: <FaLinkedinIn />, colour: '#0073AE', id: 4},
        {icon: <FaPinterest />, colour: '#B6081A', id: 5}, 
    ];
    return(
        <motion.div
            className={`border border-secondaryColor-100 rounded mb-8 p-6 w-full`}
            variants={sectionAnimate}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
        >
            <h1
                className={`text-2xl text-secondaryColor-300 font-bold capitalize mb-8 `}
            >
                follow us
            </h1>
            <div
                className="flex items-center flex-wrap justify-start gap-y-4 gap-[5%]"
            >
                {
                    medias.map((media) => (
                        <Link
                            href='#'
                            key={media.id}
                            className='bg-[var(--color)] text-white hover:text-red-900 hover:opacity-70 transition duration-300 ease-linear block w-[25%] border text-center border-[#b0acac55] p-4 text-3xl'
                            style={{'--color': media.colour} as CSSProperties}
                        >
                            {media.icon}
                        </Link>
                    ))
                }
            </div>
            
        </motion.div>
    )
}