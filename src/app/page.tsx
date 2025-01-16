'use client';
import PopularPost from "./Component/popular";
import EditorPick from "./Component/editor";
import Highlights from "./Component/highlight";
import HeadNews from "./Component/headnews";
import { useState, useEffect } from "react";
import { fetchData, fetchLatest } from "./utils/fetch";
import { newsLatestProp, newsProp } from "../../types";
import Loading from "./Component/loading";
import RecentPost from "./Component/recentPost";
import Advertisement from "./Component/advertisement";
import NewsLetter from "./Component/newsletter";
import FollowUs from "./Component/followUs";
import TrendingNews from "./Component/trending";
import { useFetchAllContext } from "./context/fetchAll";
import { useFetchTrendingContext } from "./context/fetchTrending";

export default function Home() {

  const {news, loading, error} = useFetchAllContext()
  const {newsLatest, loadingLatest, errorLatest} = useFetchTrendingContext();
  
  // const [newsLatest, setNewsLatest] = useState<newsLatestProp[]>([]);
  // const [loadingLatest, setLoadingLatest] = useState(false);
  // const [errorLatest, setErrorLatest] = useState<string>('');
  console.log(news)
  console.log(newsLatest)

    // useEffect(()=>{
      
    //   const getData = async () =>{
    //     setLoadingLatest(true)
    //     try{
    //       const data = await fetchLatest();
    //       setNewsLatest(data);
    //       setLoadingLatest(false);
    //     }catch(error){
    //       console.log(error)
    //       setErrorLatest("No results found in the API response");
    //     }finally{
    //       setLoadingLatest(false);
    //     }
        
    //   }
    //   getData();
    // }, [])

  return (
    <section
      className=" p-[1rem] lg:py-[2rem] lg:px-[4rem]"
    >
      <section
        className="lg:grid grid-cols-3 items-start gap-6"
      >
        <div
          className="col-span-2"
        >
          {news.length>0&&
            <div>
              <HeadNews 
                news={news}
              />
              <Highlights 
                news={news}
              />
              <EditorPick
                news={news} 
              />
              <PopularPost 
                news={news}
              />
            </div>
          }
          {loading&& 
            <div
              className="text-center w-full p-8 h-[100%]" 
            >
              <Loading />
            </div> 
          }
          {error&& 
            <div
              className="text-center w-full p-8 h-[100%]" 
            >
              {error}
            </div> 
          }
          
        </div>
        <div
          className="col-span-1"
        >
          <RecentPost 
            news={news}
            loading={loading}
          />
          <Advertisement />
          <div
            className="border border-secondaryColor-100 rounded mb-8 p-6"
          >
            {news.length>0&&
            <div>
              <PopularPost 
                news={news}
                showLargeSide={false}
                smallSideWidth="w-[full]"
                headTitle="4 most popular"
              />
            </div>
            }
            {loading&& 
              <Loading />
            }
            
          </div>
          <FollowUs />
          <NewsLetter />

        </div>

      </section>
      <section>
        
        <div>
          {newsLatest&&
            <TrendingNews
                news={newsLatest} 
            />
          }
          {errorLatest && 
            <p
              className="text-xl font-bold text-center p-8"
            >
              {errorLatest}
            </p>
          }
          {loadingLatest && 
            <div>
              <Loading />
            </div>
          }
        </div>
        
        
      </section>
    </section>
  );
}
