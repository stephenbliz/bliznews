import { newsProp } from "../../../types";

export const fetchData = async (url:string): Promise<newsProp[]> =>{
    const res = await fetch(url);

    if(!res.ok){
        const errorMessage = await res.text();
        throw new Error(`Failed to fetch data. Status: ${res.status}, Message: ${errorMessage}`);
    }
    const data = await res.json();
    console.log("API Response:", data); // Debug log to check structure

    if (!data.results || !Array.isArray(data.results)) {
        throw new Error("Invalid data structure: results not found or not an array");
    }
    
    return data.results
}

export const fetchLatest = async () => {
    const baseURL = "https://news-api14.p.rapidapi.com/v2/trendings?topic=General&language=en&country=us&page=1";
    const apiKey = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY

    try{
        const res = await fetch(baseURL, {
            method: 'GET',
            headers: {
                "X-Rapidapi-Key": `${apiKey}`,
                'X-Rapidapi-Host': 'news-api14.p.rapidapi.com'
            },
        })
        if(!res.ok){
            throw new Error(`Error: ${res.status} ${res.statusText}`)
        }
        const data = await res.json();
        return data.data;
    }catch(error){
        console.log('Error fetching news:', error);
    }
}
