'use client';
import { useState } from "react"
import {motion} from 'framer-motion'
import { sectionAnimate } from "../utils/animation";

export default function NewsLetter(){
    const [email, setEmail] = useState('');

    return(
        <motion.div
            className="border border-secondaryColor-100 rounded p-6 mb-8"
            variants={sectionAnimate}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
        >
            <h1
                className={`text-2xl text-primaryColor text-center font-bold capitalize mb-4 `}
            >
                bliznews newsletter
            </h1>
            <p
                className="mb-4 text-secondaryColor-200"
            >
                Subscribe to our email newsletter for good news sent out 
                every Monday
            </p>
            <form 
                className="flex"
            >
                <input 
                    type="text"
                    name="email"
                    placeholder="Email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    className="w-[65%] outline-none text-secondaryColor-200 px-2 border rounded rounded-r-none border-secondaryColor-100 border-r-0" 
                />
                <button
                    type="submit"
                    className="capitalize w-[35%] rounded rounded-l-none bg-primaryColor font-bold text-white px-2 py-2 cursor-pointer"
                >
                    subscribe
                </button>
            </form>
        </motion.div>
    )
}