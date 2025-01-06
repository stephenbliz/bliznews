'use client';
import NewsCard from "./Component/newsCard";
import { motion } from "framer-motion"
import { sectionAnimate } from "./utils/animation";




export default function Home() {
  const news = [
    {author: 'ebuka uzoma', title: 'This is the title of the project', desc: 'Just a little description for a display about what the news is all about', date:'16 hours ago', id: 1},
    {author: 'ebuka uzoma', title: 'This is the title of the project', desc: 'Just a little description for a display about what the news is all about', date:'16 hours ago', id: 2},
  ]

  const news2 = [
    {author: 'ebuka uzoma', title: 'This is the title of the project', desc: 'Just a little description for a display about what the news is all about', date:'16 hours ago', id: 1},
    {author: 'ebuka uzoma', title: 'This is the title of the project', desc: 'Just a little description for a display about what the news is all about', date:'16 hours ago', id: 2},
    {author: 'ebuka uzoma', title: 'This is the title of the project', desc: 'Just a little description for a display about what the news is all about', date:'16 hours ago', id: 3},
    {author: 'ebuka uzoma', title: 'This is the title of the project', desc: 'Just a little description for a display about what the news is all about', date:'16 hours ago', id: 4},
  ]
  return (
    <section
      className=" p-[1rem] lg:py-[2rem] lg:px-[4rem]"
    >
      <section
        className="lg:grid grid-cols-3 items-start gap-2"
      >
        <div
          className="col-span-2"
        >
          <motion.div
            variants={sectionAnimate}
            initial='hidden'
            whileInView='visible'
            className="lg:flex w-full mb-8 items-start pb-4 lg:pb-8 justify-between border-b-4 border-secondaryColor-100"
          >
            <div
              className="lg:w-[60%]"
            >
              <NewsCard 
                news={news[0]}
              />
            </div>
            <div
              className="w-full lg:w-[38%] flex flex-wrap justify-between items-start"
            >
              {
                news.map((n)=>(
                  <NewsCard
                    key={n.id} 
                    showAuthor={false}
                    showTitle={false}
                    mobileWidth="48%"
                    news={n}
                  />
                ))
              }
            </div>
          </motion.div>
          <motion.div
            className="border-b-4 mb-8 border-secondaryColor-100"
            variants={sectionAnimate}
            initial='hidden'
            whileInView='visible'
          >
            <h1
              className="text-2xl font-bold capitalize mb-8 text-secondaryColor-300"
            >
              highlights
            </h1>
            <div
              className="lg:flex flex-wrap items-start pb-4 lg:pb-8 justify-between"
            >
              {news2.map((n)=>(
                <div
                  className="w-full lg:w-[48%]"
                  key={n.id}
                >
                  <NewsCard 
                    news={n}
                  />
                </div>
                
              ))}
            </div>
          </motion.div>
          <motion.div
            className="border-b-4 mb-8 border-secondaryColor-100"
            variants={sectionAnimate}
            initial='hidden'
            whileInView='visible'
          >
            <h1
              className="text-2xl font-bold capitalize mb-8 text-secondaryColor-300"
            >
              editors pick
            </h1>
            <div
              className="lg:flex flex-wrap items-start pb-4 lg:pb-8 justify-between"
            >
              {news2.map((n)=>(
                <div
                  className="w-full"
                  key={n.id}
                >
                  <NewsCard 
                    showShares={false}
                    display="flex"
                    descWidth="w-[68%]"
                    imageWidth="w-[30%]"
                    news={n}
                  />
                </div>
                
              ))}
            </div>
          </motion.div>
          <motion.div
            className="border-b-4 mb-8 border-secondaryColor-100"
            variants={sectionAnimate}
            initial='hidden'
            whileInView='visible'
          >
            <h1
              className="text-2xl font-bold capitalize mb-8 text-secondaryColor-300"
            >
              popular post
            </h1>
            <div
              className="lg:flex flex-wrap items-start justify-between"
            >
              <div
                className="lg:w-[48%]"
              >
                <NewsCard 
                  news={news[0]}
                />
              </div>
              <div
                className="lg:w-[48%] flex flex-wrap justify-between items-start"
              >
                {
                  news2.map((n)=>(
                    <NewsCard 
                      key={n.id}
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

        </div>
        <div
          className="col-span-1"
        >

        </div>

      </section>
      <section>

      </section>
    </section>
  );
}
