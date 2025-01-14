'use client';
import PopularPost from "./Component/popular";
import EditorPick from "./Component/editor";
import Highlights from "./Component/highlight";
import HeadNews from "./Component/headnews";
import { useState, useEffect } from "react";
import { fetchData } from "./utils/fetch";
import { newsProp } from "../../types";
import Loading from "./Component/loading";

export default function Home() {
  
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const api = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=ng&language=en`;
  const [news, setNews] = useState<newsProp[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  console.log(news)
  useEffect(()=>{
      const fetchAllData = async () => {
        setLoading(true);
        try{
          const data = await fetchData(api);
          if (data) {
            setNews(data); // Ensure you're using the correct key from the API response
            setLoading(false);
          } else {
              console.warn("No results found in the API response");
              setError('No result found')
              setLoading(false);
          }
        }catch(error){
          console.log(error)
          setError('No result found');
        }finally{
          setLoading(false);
        }
          
      }
      fetchAllData();
    },[])

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
          No content yet
        </div>

      </section>
      {/* <section>

      </section> */}
    </section>
  );
}
