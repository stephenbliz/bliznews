export interface newsCardProp{
    display?: string
    cardWidth?: string
    showTitle?: boolean
    showAuthor?: boolean
    showShares?: boolean
    showTag?: boolean
    imageWidth?: string
    descWidth?: string
    mobileWidth?: string
    news?: newsProp
    titleFont?: string
}

// export interface newsProp{
//     ai_org: string
//     ai_region: string
//     ai_tag: string
//     article_id: string
//     category: string[]
//     content: string
//     country: string[]
//     creator: string[]
//     description: string
//     duplicate: boolean
//     image_url: string
//     keywords: string[]
//     language: string
//     link: string
//     pubDate: string
//     pubDateTZ: string
//     sentiment: string
//     sentiment_stats: string
//     source_icon: string
//     source_id: string
//     source_name: string
//     source_priority: number
//     source_url: string
//     title: string
//     video_url: string
// }
export interface newsProp {
    ai_org?: string; // Optional: Only available in corporate plans
    ai_region?: string; // Optional: Only available in corporate plans
    ai_tag?: string; // Optional: Only available in professional and corporate plans
    article_id: string;
    category: string[]; // Array of strings
    content?: string; // Optional: Available in paid plans
    country: string[]; // Array of strings
    creator: string | null; // Can be a string or null
    description?: string; // Optional
    duplicate?: boolean; // Optional, boolean value
    image_url: string | null; // Optional
    keywords?: string | null; // Optional, can be a string or null
    language: string;
    link: string; // URL to the news article
    pubDate: string; // Publication date as a string
    pubDateTZ?: string; // Optional timezone
    sentiment?: string; // Optional
    sentiment_stats?: string; // Optional
    source_icon?: string; // Optional: URL for source icon
    source_id?: string; // Optional
    source_name?: string; // Optional
    source_priority?: number; // Optional: Number priority
    source_url?: string; // Optional: URL for the source
    title: string;
    video_url?: string | null; // Optional, can be a string or null
}

export interface popularPostProp{
    news: newsProp[]
}
export interface headNewsProp{
    news: newsProp[]
}
export interface highLightProp{
    news: newsProp[]
}
export interface editorsPickProp{
    news: newsProp[]
}