'use client';
import { motion } from "framer-motion";
import { sectionAnimate } from "../utils/animation";
import NewsCard from "./newsCard";
import { highLightProp } from "../../../types";

export default function Highlights({news}:highLightProp){
  const newsIndex = [7, 8, 9, 5];

  const filteredNews = news?.filter((_, index)=>{
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
              className="text-xl font-heading md:text-2xl font-bold capitalize mb-8 text-secondaryColor-300"
            >
              highlights
            </h1>
            <div
              className="lg:flex flex-wrap items-start pb-4 lg:pb-8 justify-between"
            >
              {filteredNews.map((n)=>(
                <div
                  className="w-full lg:w-[48%]"
                  key={n.article_id}
                >
                  <NewsCard 
                    news={n}
                  />
                </div>
                
              ))}
            </div>
          </motion.div>
    )
}