'use client'
import { useFetchAllContext } from "@/app/context/fetchAll";
import NewsDetail from "../../Component/newDetail";
import { use } from "react";
import Head from "next/head";
import Loading from "@/app/Component/loading";
import NewsCard from "../../Component/newsCard";
import { usePathname } from "next/navigation";
import { useFetchTrendingContext } from "@/app/context/fetchTrending";

export default function HomeDetail({params}:{params:Promise<{homeid: string}>}){
    const {news, loading, error} = useFetchAllContext();
    const {newsLatest, loadingLatest, errorLatest} = useFetchTrendingContext()

    const {homeid} = use(params)
    const pathname = usePathname();
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https:localhost:3000';
    console.log(pathname)

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
   
    return(
        <>
        {
            filteredNews?
            <Head>
                <title>{filteredNews?.title}</title>
                <meta property="og:title" content={filteredNews?.title} />
                <meta property="og:url" content={`${baseURL}${pathname}`} />
                <meta property="og:description" content={filteredNews?.description} />
                <meta property="og:image" content={`${filteredNews?.image_url}`} />
            </Head>
            :
            <Head>
            <title>{filteredNews2?.title}</title>
                <meta property="og:title" content={filteredNews2?.title} />
                <meta property="og:url" content={`${baseURL}${pathname}`} />
                <meta property="og:description" content={filteredNews2?.excerpt} />
                <meta property="og:image" content={`${filteredNews2?.thumbnail}`} />
            </Head>
        }
        <section
            className=" p-[1rem] md:px-[2rem] lg:py-[2rem] lg:px-[4rem]"
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
                        pathname={pathname}
                        baseURL={baseURL}
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
                        pathname={pathname}
                        baseURL={baseURL}
                    />
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
                {loadingLatest &&
                    <div>
                        <Loading />
                    </div> 
                }
                {errorLatest &&
                    <div>
                        {errorLatest}
                    </div> 
                }
            </div>
        
            <div
                className="md:w-[80%] lg:w-[72%] md:ml-[20%] lg:ml-[18%] mb-4"
            >
                <h3
                    className="capitalize font-heading text-xl md:text-2xl mb-4"
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
            
        </section>
        </>
    )
}