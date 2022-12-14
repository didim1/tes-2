export interface ArticleTypes {
    id: number,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    updatedAt: string,
    featured?: boolean,
    launches?: object[],
    events?: object[]
}