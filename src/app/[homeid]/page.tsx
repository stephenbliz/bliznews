'use client'
import { useFetchAllContext } from "../context/fetchAll";
import NewsDetail from "../Component/newDetail";
import { use } from "react";
import NewsCard from "../Component/newsCard";
import { useFetchTrendingContext } from "../context/fetchTrending";

export default function HomeDetail({params}:{params:Promise<{homeid: string}>}){
    const {news} = useFetchAllContext();
    const {newsLatest} = useFetchTrendingContext()

    const {homeid} = use(params)

    const slugify = (title: string) => {
        return title.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
    }

    const filteredNews = news?.find((item)=>{
        return homeid === slugify(item.title)
    })
    const filteredNews2 = newsLatest?.find((item)=>{
        return homeid === slugify(item.title)
    })
    const otherNews = news?.filter((item)=>{
        return homeid !== slugify(item.title)
    })
    // const otherNews2 = newsLatest?.filter((item)=>{
    //     return homeid !== slugify(item.title)
    // })
    console.log('other new:', otherNews)

    console.log(filteredNews);

    return(
        <section
            className=" p-[1rem] lg:py-[2rem] lg:px-[4rem]"
        >
            
            <div>
                {filteredNews&&
                    <NewsDetail 
                        imageALT={filteredNews!.title}
                        imageSRC={filteredNews!.image_url}
                        title={filteredNews!.title}
                        description={filteredNews!.description}
                        author={filteredNews!.creator}
                        time={filteredNews!.pubDate}
                        link={filteredNews!.link}
                        content={filteredNews?.description}
                    />
                }
                {filteredNews2&&
            
                    <NewsDetail 
                        imageALT={filteredNews2!.title}
                        imageSRC={filteredNews2!.thumbnail}
                        title={filteredNews2!.title}
                        description={filteredNews2?.excerpt}
                        author={filteredNews2!.authors}
                        time={filteredNews2!.date}
                        content={filteredNews2?.excerpt}
                        link={filteredNews2!.url}
                    />
                }
            </div>
        
            <div
                className="md:w-[67%] lg:w-[64%] mx-auto mb-4"
            >
                <h3
                    className="capitalize text-2xl mb-4"
                >
                    read these next
                </h3>
                <div
                    className="flex flex-wrap gap-y-4"
                >
                    {
                        otherNews.map((n)=>(
                            <NewsCard 
                                news={n}
                                key={n.article_id}
                                display="flex"
                                imageWidth="w-[28%]"
                                descWidth="w-[68%]"
                                titleFont="text-[1rem]"
                            />
                        ))
                    }
                    
                </div>
            </div>
            {/* {loading &&
                <div>
                    <Loading />
                </div> 
            }
            {error &&
                <div>
                    {error}
                </div> 
            } */}
        </section>
    )
}