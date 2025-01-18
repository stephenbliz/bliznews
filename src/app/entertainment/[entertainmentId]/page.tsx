'use client';
import { useFetchEntertainmentContext } from "@/app/context/fetchEntertainment";
import { use } from "react";
import NewsDetail from "@/app/Component/newDetail";
import NewsCard from "@/app/Component/newsCard";

export default function EntertainmentDetail({params}:{params:Promise<{entertainmentId: string}>}){
    const {entertainmentId}= use(params);
    const {news} = useFetchEntertainmentContext();

    const slugify = (title: string) => {
        return title.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
    }

    const filteredNews = news.find((item)=>{
        return entertainmentId === slugify(item.title);
    })

    const otherNews = news.filter((item)=>{
        return entertainmentId !== slugify(item.title)
    })
    
    return(
        <section
            className=" p-[1rem] md:px-[6rem] lg:py-[2rem] lg:px-[4rem]"
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
                                path="/entertainment"
                            />
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}