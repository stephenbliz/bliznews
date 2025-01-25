'use client';
import { motion } from "framer-motion";
import { sectionAnimate } from "../utils/animation";
import NewsCard from "./newsCard";
import { popularPostProp } from "../../../types";

export default function PopularPost ({
  news, 
  headTitle='popular post', 
  smallSideWidth='lg:w-[48%]', 
  showLargeSide=true}:popularPostProp){
  const newsIndex = [4, 9, 3, 5];

  const filteredNews = news?.filter((_, index) =>{
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
              className={`text-xl font-heading md:text-2xl ${showLargeSide === false? 'text-primaryColor':'text-secondaryColor-300'} font-bold capitalize mb-8 `}
            >
              {headTitle}
            </h1>
            <div
              className="lg:flex flex-wrap items-start justify-between"
            >
              {showLargeSide &&
              <div
                className={`lg:w-[48%] `}
              >
                <NewsCard 
                  news={news[0]}
                />
              </div>
              }
              <div
                className={`${smallSideWidth} flex flex-wrap justify-between items-start`}
              >
                {
                  filteredNews.map((n)=>(
                    <NewsCard 
                      key={n.article_id}
                      showAuthor={false}
                      showTitle={false}
                      showShares={false}
                      showTag={false}
                      display="flex"
                      descWidth="w-[68%]"
                      imageWidth="w-[30%]"
                      news={n}
                    />
                  ))
                }
              </div>
            </div>
          </motion.div>
    )
}