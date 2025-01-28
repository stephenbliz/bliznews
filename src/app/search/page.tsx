'use client';
import Loading from "../Component/loading";
import NewsCard from "../Component/newsCard";
import PopularPost from "../Component/popular";
import Advertisement from "../Component/advertisement";
import FollowUs from "../Component/followUs";
import { Suspense } from "react";
import NewsLetter from "../Component/newsletter";
import { useSearchParams } from "next/navigation";
import { useFetchSearchContext } from "../context/fetchSearch";
import { useEffect } from "react";
import { useFetchAllContext } from "../context/fetchAll";

export default function Search(){
    const searchParams = useSearchParams();
    console.log(searchParams);
    const query = searchParams.get('q')
    const {news, loading, error, fetchSearch} = useFetchSearchContext();
    const {news:news2, loading:loading2} = useFetchAllContext()

    useEffect(()=>{
        if(query){
            fetchSearch(query);
        }
    }, [query])

    return(
        <Suspense
            fallback={<Loading />}
        >
        <section
            className=" p-[1rem] md:px-[6rem] lg:py-[2rem] lg:px-[4rem] lg:grid grid-cols-3 items-start gap-6"
        >
            <div
                className="col-span-2"
            >
                {news && 
                    <div>
                        {
                            news.map((n)=>(
                                <NewsCard
                                    key={n.article_id}
                                    news={n}
                                    display="md:flex"
                                    titleFont="text-[1rem]"
                                    imageWidth="md:w-[65%]"
                                    descWidth="md:w-[33%]"
                                    path="/politics"
                                />
                            ))
                        }
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
            </div>
            <div
                className="col-span-1"
            >
                <div
                    className="border border-secondaryColor-100 rounded mb-8 p-6"
                >
                    {news2.length>0&&
                        <div>
                            <PopularPost 
                            news={news2}
                            showLargeSide={false}
                            smallSideWidth="w-[full]"
                            headTitle="4 most popular"
                            />
                        </div>
                    }
                    {loading2&& 
                        <Loading />
                    }
                    
                </div>
                <FollowUs />
                <Advertisement />
                <NewsLetter />
            </div>

        </section>
        </Suspense>
    )
}