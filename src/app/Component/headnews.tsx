'use client';
import { motion } from "framer-motion";
import { sectionAnimate } from "../utils/animation";
import NewsCard from "./newsCard";
import { headNewsProp } from "../../../types";

export default function HeadNews({news}:headNewsProp){
  const newsIndex = [2, 6];

  const filteredNews = news?.filter((_, index)=>{
    return newsIndex.includes(index);
  })
    
    return(
      <>
        <motion.div
            variants={sectionAnimate}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
            className="lg:flex w-full mb-8 items-start pb-4 lg:pb-8 justify-between border-b-4 border-secondaryColor-100"
          >
            <div
              className="lg:w-[60%]"
            >
              <NewsCard 
                news={news[1]}
              />
            </div>
            <div
              className="w-full lg:w-[38%] flex flex-wrap justify-between items-start"
            >
              {
                filteredNews.map((n)=>(
                  <NewsCard
                    key={n.article_id} 
                    showAuthor={false}
                    showTitle={false}
                    mobileWidth="48%"
                    news={n}
                  />
                ))
              }
            </div>
          </motion.div>
          </>
    )
}