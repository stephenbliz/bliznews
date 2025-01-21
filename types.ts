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
    path?: string
}
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
    showLargeSide?: boolean
    headTitle?: string
    smallSideWidth?: string
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
export interface RecentPostProp{
    news: newsProp[]
    loading: boolean
}

export interface newsLatestProp{
    date: string
    title: string
    url: string
    videos?: string[]
    excerpt: string
    thumbnail: string | null
    language?: string
    paywall?: boolean
    contentLength?: number
    authors: string
    keywords?: string[]
    publisher: {
        name: string
        url: string
    }
    favicon?: string
}

export interface trendingNewsProp{
    news: newsLatestProp[]
}
export interface newsDetailProp{
    imageALT: string
    imageSRC: string | null
    time: string | undefined
    description: string | undefined
    title: string
    author: string | null | undefined
    content?: string | undefined
    link: string
    pathname: string
    baseURL: string
}
export interface fetchAllContextProp{
    news: newsProp[]
    loading: boolean
    error: string
    fetchAllData: () => void
}
export interface fetchEntertainmentContextProp{
    news: newsProp[]
    loading: boolean
    error: string
    fetchEntertainment: () => void
}
export interface fetchTechnologyContextProp{
    news: newsProp[]
    loading: boolean
    error: string
    fetchTechnology: () => void
}
export interface fetchPoliticsContextProp{
    news: newsProp[]
    loading: boolean
    error: string
    fetchPolitics: () => void
}
export interface fetchSportsContextProp{
    news: newsProp[]
    loading: boolean
    error: string
    fetchSports: () => void
}
export interface fetchBusinessContextProp{
    news: newsProp[]
    loading: boolean
    error: string
    fetchBusiness: () => void
}
export interface fetchTrendingContextProp{
    newsLatest: newsLatestProp[]
    loadingLatest: boolean
    errorLatest: string
    getData: () => void
}
export interface shareButtonProp{
    baseURL: string
    pathname: string
    title: string
}