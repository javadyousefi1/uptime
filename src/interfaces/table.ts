import { JSX, type ReactNode } from "react";

export interface TableColumn {
    title: string,
    render?: (data: any) => JSX.Element
}

export interface TableProps<T> {
    column: TableColumn[],
    data: T[],
    handleFetchMore: () => void,
    hasNextPage: boolean,
    isLoading: boolean,
    error: boolean,
    
}