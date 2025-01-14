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