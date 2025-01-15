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
    const baseURL = "https://newsnow.p.rapidapi.com/newsv2_top_news_location";
    const apiKey = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY

    try{
        const res = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                "X-Rapidapi-Key": `${apiKey}`,
                'X-Rapidapi-Host': 'newsnow.p.rapidapi.com'
            },
            body: JSON.stringify({
                language: 'en',
                page: '2',
                location: 'us'
            })
        })
        if(!res.ok){
            throw new Error(`Error: ${res.status} ${res.statusText}`)
        }
        const data = await res.json();
        return data.news;
    }catch(error){
        console.log('Error fetchinh new:', error);
    }
}

// POST /newsv2_top_news_location HTTP/1.1
// X-Rapidapi-Key: 6621facf16msh178dd59ea70ad77p14988cjsn55f9a37462d2
// X-Rapidapi-Host: newsnow.p.rapidapi.com
// Content-Type: application/json
// Host: newsnow.p.rapidapi.com
// Content-Length: 42

// {"location":"us","language":"en","page":1}