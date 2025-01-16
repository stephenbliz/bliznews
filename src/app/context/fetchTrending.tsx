'use client';
import { createContext, useContext, useState, useEffect } from "react";
import { fetchTrendingContextProp, newsLatestProp } from "../../../types";
import { fetchLatest } from "../utils/fetch";


export const FetchTrendingContext = createContext<fetchTrendingContextProp | undefined>(undefined);

export default function FetchTrendingContextProvider({children}:{children: React.ReactNode}){
    const [newsLatest, setNewsLatest] = useState<newsLatestProp[]>([]);
    const [loadingLatest, setLoadingLatest] = useState(false);
    const [errorLatest, setErrorLatest] = useState<string>('');

    const getData = async () =>{
        setLoadingLatest(true)
        try{
          const data = await fetchLatest();
          setNewsLatest(data);
          setLoadingLatest(false);
        }catch(error){
          console.log(error)
          setErrorLatest("No results found in the API response");
        }finally{
          setLoadingLatest(false);
        }
        
      }

    useEffect(()=>{
        getData();
    }, [])
    
    return(
        <FetchTrendingContext.Provider value={{newsLatest, loadingLatest, errorLatest, getData}}>
            {children}
        </FetchTrendingContext.Provider>
    )
}

export const useFetchTrendingContext = () =>{
    const context = useContext(FetchTrendingContext);

    if(!context){
        throw new Error('Context must be used within provider');
    }

    return context;
}