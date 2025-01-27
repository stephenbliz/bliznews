'use client';
import { createContext, useContext, useState } from "react";
import { fetchSearchContextProp, newsProp } from "../../../types";

export const FetchSearchContext = createContext<fetchSearchContextProp | undefined>(undefined);

export default function FetchSearchContextProvider ({children}:{children: React.ReactNode}){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const [news, setNews] = useState<newsProp[] | null>(null);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const fetchSearch = async (query: string)=>{
        setLoading(true);
        try{
            const res = await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&qInMeta=${query}&language=en`);
            const data = await res.json();
            setNews(data.results);
            setLoading(false)
        }catch(error){
            setError('Could not fetch the resource')
        }finally{
            setLoading(false)
        }
        
    }

    return(
        <FetchSearchContext.Provider value={{fetchSearch, news, loading, error}}>
            {children}
        </FetchSearchContext.Provider>
    )
}

export const useFetchSearchContext =()=>{
    const context = useContext(FetchSearchContext);

    if(!context){
        throw new Error('Must be used within the context provider');
    }

    return context;
}