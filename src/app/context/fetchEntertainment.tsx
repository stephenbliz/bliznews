'use client';
import { createContext, useContext, useState, useEffect } from "react";
import { fetchEntertainmentContextProp, newsProp } from "../../../types";
import { fetchData } from "@/app/utils/fetch";

export const FetchEntertainmentContext = createContext<fetchEntertainmentContextProp | undefined>(undefined);

export default function FetchEntertainmentContextProvider({children}:{children: React.ReactNode}){
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const api = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=ng&language=en&category=entertainment`;
      const [news, setNews] = useState<newsProp[]>([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string>('');

      const fetchEntertainment = async () => {
        setLoading(true);
        try{
          const data = await fetchData(api);
          if (data) {
            setNews(data); // Ensure you're using the correct key from the API response
            setLoading(false);
          } else {
              console.warn("No results found in the API response");
              setError('Rate Limit Exceeded')
              setLoading(false);
          }
        }catch(error){
          console.log(error)
          setError('Rate Limit Exceeded');
        }finally{
          setLoading(false);
        }
          
      }

      useEffect(()=>{
            fetchEntertainment();
          },[])

          return(
            <FetchEntertainmentContext.Provider value={{news, loading, error, fetchEntertainment}}>
                {children}
            </FetchEntertainmentContext.Provider>
          )

}

export const useFetchEntertainmentContext = () => {
    const context = useContext(FetchEntertainmentContext);

    if(!context){
        throw new Error('Context must be used within a provider');
    }
    
    return context;
}