'use client';
import { useFetchBusinessContext } from "@/app/context/fetchBusiness";
import { use } from "react";
import { usePathname } from "next/navigation";
import NewsCard from "@/app/Component/newsCard";
import NewsDetail from "@/app/Component/newDetail";

export default function BusinessDetail({params}:{params:Promise<{businessId: string}>}){
    const {businessId} = use(params);
    const {news} = useFetchBusinessContext();
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:3000';
    const pathname = usePathname();
    const slugify = (title:string) => {
        return title.toLocaleLowerCase().trim().replace(/[\s\W-]+/g, '-');
    }

    const filteredNews = news.find((item)=>{
        return businessId === slugify(item.title);
    })
    const otherNews = news.filter((item)=>{
        return businessId !== slugify(item.title)
    })

    return(
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
                                path="/business"
                            />
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}