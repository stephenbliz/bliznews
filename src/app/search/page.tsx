'use client';
import Loading from "../Component/loading";
import NewsCard from "../Component/newsCard";
import PopularPost from "../Component/popular";
import Advertisement from "../Component/advertisement";
import FollowUs from "../Component/followUs";
import NewsLetter from "../Component/newsletter";
import { useSearchParams } from "next/navigation";
import { useFetchSearchContext } from "../context/fetchSearch";
import { useEffect, Suspense } from "react";
import { useFetchAllContext } from "../context/fetchAll";

// export const dynamic = 'force-dynamic';

function SearchContent() {
    const searchParams = useSearchParams(); // Use inside this isolated component
    const query = searchParams.get('q');
    const { news, loading, error, fetchSearch } = useFetchSearchContext();

    useEffect(() => {
        if (query) {
            fetchSearch(query);
        }
    }, [query]);

    return (
        <div className="col-span-2">
            {news && news.length>0&& (
                <div>
                    {news?.map((n) => (
                        <NewsCard
                            key={n.article_id}
                            news={n}
                            display="md:flex"
                            titleFont="text-[1rem]"
                            imageWidth="md:w-[65%]"
                            descWidth="md:w-[33%]"
                            path="/search"
                        />
                    ))}
                </div>
            )}
            {news&&news.length==0&&
                (<div className="text-2xl text-center mb-8">No news found...</div>)
            }
            {loading && (
                <div>
                    <Loading />
                </div>
            )}
            {error && (
                <div>
                    {error}
                </div>
            )}
        </div>
    );
}

export default function Search() {
    const { news: news2, loading: loading2 } = useFetchAllContext();

    return (
        <section className="p-[1rem] md:px-[6rem] lg:py-[2rem] lg:px-[4rem] lg:grid grid-cols-3 items-start gap-6">
            <Suspense fallback={<Loading />}>
                <SearchContent />
            </Suspense>
            <div className="col-span-1">
                <div className="border border-secondaryColor-100 rounded mb-8 p-6">
                    {news2.length > 0 && (
                        <div>
                            <PopularPost
                                news={news2}
                                showLargeSide={false}
                                smallSideWidth="w-[full]"
                                headTitle="4 most popular"
                            />
                        </div>
                    )}
                    {loading2 && <Loading />}
                </div>
                <FollowUs />
                <Advertisement />
                <NewsLetter />
            </div>
        </section>
    );
}

// export default function Search(){
//     const searchParams = useSearchParams();
//     console.log(searchParams);
//     const query = searchParams.get('q')
//     const {news, loading, error, fetchSearch} = useFetchSearchContext();
//     const {news:news2, loading:loading2} = useFetchAllContext()

//     useEffect(()=>{
//         if(query){
//             fetchSearch(query);
//         }
//     }, [query])

//     return(
        
//         <section
//             className=" p-[1rem] md:px-[6rem] lg:py-[2rem] lg:px-[4rem] lg:grid grid-cols-3 items-start gap-6"
//         >
//             <Suspense
//                 fallback={<Loading />}
//             >
//             <div
//                 className="col-span-2"
//             >
//                 {news && 
//                     <div>
//                         {
//                             news.map((n)=>(
//                                 <NewsCard
//                                     key={n.article_id}
//                                     news={n}
//                                     display="md:flex"
//                                     titleFont="text-[1rem]"
//                                     imageWidth="md:w-[65%]"
//                                     descWidth="md:w-[33%]"
//                                     path="/politics"
//                                 />
//                             ))
//                         }
//                     </div>
//                 }
//                 {loading && 
//                     <div>
//                         <Loading />
//                     </div> 
//                 }
//                 {error && 
//                     <div>
//                         {error}
//                     </div> 
//                 }
//             </div>
//             </Suspense>
//             <div
//                 className="col-span-1"
//             >
//                 <div
//                     className="border border-secondaryColor-100 rounded mb-8 p-6"
//                 >
//                     {news2.length>0&&
//                         <div>
//                             <PopularPost 
//                             news={news2}
//                             showLargeSide={false}
//                             smallSideWidth="w-[full]"
//                             headTitle="4 most popular"
//                             />
//                         </div>
//                     }
//                     {loading2&& 
//                         <Loading />
//                     }
                    
//                 </div>
//                 <FollowUs />
//                 <Advertisement />
//                 <NewsLetter />
//             </div>

//         </section>
//     )
// }