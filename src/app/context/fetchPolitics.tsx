'use client';
import { createContext, useContext, useState, useEffect } from "react";
import { fetchPoliticsContextProp, newsProp } from "../../../types";
import { fetchData } from "@/app/utils/fetch";

export const FetchPoliticsContext = createContext<fetchPoliticsContextProp | undefined>(undefined);

export default function FetchPoliticsContextProvider({children}:{children: React.ReactNode}){
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const api = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=ng&language=en&category=politics`;
      const [news, setNews] = useState<newsProp[]>([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string>('');

      const fetchPolitics = async () => {
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
            fetchPolitics();
          },[])

          return(
            <FetchPoliticsContext.Provider value={{news, loading, error, fetchPolitics}}>
                {children}
            </FetchPoliticsContext.Provider>
          )

}

export const useFetchPoliticsContext = () => {
    const context = useContext(FetchPoliticsContext);

    if(!context){
        throw new Error('Context must be used within a provider');
    }
    
    return context;
}