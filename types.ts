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
    news: {
        author: string
        title: string
        desc: string
        date: string
        id: number
    }
}