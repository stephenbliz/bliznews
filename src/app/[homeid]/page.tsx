'use client'
import { useFetchAllContext } from "../Component/context/fetchAll";
import Loading from "../Component/loading";
import NewsDetail from "../Component/newDetail";
import { use } from "react";
import NewsCard from "../Component/newsCard";

export default function HomeDetail({params}:{params:Promise<{homeid: string}>}){
    const {news, loading, error} = useFetchAllContext();
    const {homeid} = use(params)

    const slugify = (title: string) => {
        return title.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
    }

    const filteredNews = news?.find((item)=>{
        return homeid === slugify(item.title)
    })
    const otherNews = news?.filter((item)=>{
        return homeid !== slugify(item.title)
    })
    console.log('other new:', otherNews)

    console.log(filteredNews);

    return(
        <section
            className=" p-[1rem] lg:py-[2rem] lg:px-[4rem]"
        >
            {news.length>0&&
                <div>
                    <NewsDetail 
                        imageALT={filteredNews!.title}
                        imageSRC={filteredNews!.image_url}
                        title={filteredNews!.title}
                        description={filteredNews!.description}
                        author={filteredNews!.creator}
                        time={filteredNews!.pubDate}
                        content={filteredNews?.description}
                    />
                    <div>
                        <h3
                            className="capitalize text-2xl mb-4"
                        >
                            read these too
                        </h3>
                        <div

                        >
                            {/* {
                                filteredNews.
                            }
                            <NewsCard 
                                news={filteredNews}
                            /> */}
                        </div>
                    </div>
                </div>
            }
            {loading &&
                <div>
                    <Loading />
                </div> 
            }
            {error &&
                <div>
                    {error}
                </div> 
            }
        </section>
    )
}