'use client';
import { createContext, useContext, useState, useEffect } from "react";
import { fetchAllContextProp, newsProp } from "../../../../types";
import { fetchData } from "@/app/utils/fetch";

export const FetchAllContext = createContext<fetchAllContextProp | undefined>(undefined);

export default function FetchAllContextProvider({children}:{children: React.ReactNode}){
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const api = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=ng&language=en`;
      const [news, setNews] = useState<newsProp[]>([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string>('');

      const fetchAllData = async () => {
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
            fetchAllData();
          },[])

          return(
            <FetchAllContext.Provider value={{news, loading, error, fetchAllData}}>
                {children}
            </FetchAllContext.Provider>
          )

}

export const useFetchAllContext = () => {
    const context = useContext(FetchAllContext);

    if(!context){
        throw new Error('Context must be used within a provider');
    }
    
    return context;
}