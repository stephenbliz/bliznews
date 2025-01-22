'use client';
import { useFetchPoliticsContext } from "@/app/context/fetchPolitics";
import { use } from "react";
import Head from "next/head";
import Loading from "@/app/Component/loading";
import { usePathname } from "next/navigation";
import NewsCard from "@/app/Component/newsCard";
import NewsDetail from "@/app/Component/newDetail";

export default function TechnologyDetail({params}:{params:Promise<{politicsId: string}>}){
    const {politicsId} = use(params);
    const {news, loading, error} = useFetchPoliticsContext();
    const pathname = usePathname();
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https:localhost:3000';
    const slugify = (title:string) => {
        return title.toLocaleLowerCase().trim().replace(/[\s\W-]+/g, '-');
    }

    const filteredNews = news.find((item)=>{
        return politicsId === slugify(item.title);
    })
    const otherNews = news.filter((item)=>{
        return politicsId !== slugify(item.title)
    })

    return(
        <>
        <Head>
            <title>{filteredNews?.title}</title>
            <meta property="og:title" content={filteredNews?.title} />
            <meta property="og:url" content={`${baseURL}${pathname}`} />
            <meta property="og:description" content={filteredNews?.description} />
            <meta property="og:image" content={`${filteredNews?.image_url}`} />
        </Head>
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
                {loading && <Loading />}
                {error && <div>{error}</div>}
            </div>
                    
            <div
                className="md:w-[80%] lg:w-[72%] md:ml-[20%] lg:ml-[18%] mb-4"
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
                                path="/politics"
                            />
                        ))
                    }
                    
                </div>
            </div>
        </section>
        </>
    )
}