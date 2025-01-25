'use client';
import { motion } from "framer-motion";
import { sectionAnimate } from "../utils/animation";
import NewsCard from "./newsCard";
import { editorsPickProp } from "../../../types";

export default function EditorPick ({news}:editorsPickProp){
    const newsIndex = [4, 9, 6];

    const filteredNews = news.filter((_, index) =>{
      return newsIndex.includes(index);
    })

    return(
        <motion.div
            className="border-b-4 mb-8 border-secondaryColor-100"
            variants={sectionAnimate}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
          >
            <h1
              className="text-xl md:text-2xl font-heading font-bold capitalize mb-8 text-secondaryColor-300"
            >
              editors pick
            </h1>
            <div
              className="lg:flex flex-wrap items-start pb-4 lg:pb-8 justify-between"
            >
              {filteredNews.map((n)=>(
                <div
                  className="w-full"
                  key={n.article_id}
                >
                  <NewsCard 
                    showShares={false}
                    display="lg:flex"
                    descWidth="lg:w-[68%]"
                    imageWidth="lg:w-[30%]"
                    news={n}
                  />
                </div>
                
              ))}
            </div>
          </motion.div>
    )
}