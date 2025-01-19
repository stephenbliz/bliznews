'use client';
import { createContext, useContext, useState, useEffect } from "react";
import { fetchBusinessContextProp, newsProp } from "../../../types";
import { fetchData } from "@/app/utils/fetch";

export const FetchBusinessContext = createContext<fetchBusinessContextProp | undefined>(undefined);

export default function FetchBusinessContextProvider({children}:{children: React.ReactNode}){
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const api = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=ng&language=en&category=business`;
      const [news, setNews] = useState<newsProp[]>([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string>('');

      const fetchBusiness = async () => {
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
            fetchBusiness();
          },[])

          return(
            <FetchBusinessContext.Provider value={{news, loading, error, fetchBusiness}}>
                {children}
            </FetchBusinessContext.Provider>
          )

}

export const useFetchBusinessContext = () => {
    const context = useContext(FetchBusinessContext);

    if(!context){
        throw new Error('Context must be used within a provider');
    }
    
    return context;
}