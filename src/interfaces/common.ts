export interface IServerReuslt<T> {
    data: {
        items: T[],
        totalCount: number
    },
    message: string | null,
    status: boolean
}

export interface IPagintateQuery {
    pageSize:number,
    pageIndex:number
}