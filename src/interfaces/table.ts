import { JSX, type ReactNode } from "react";

export interface TableColumn {
    title: string,
    render?: () => JSX.Element
}

export interface TableProps<T> {
    column: TableColumn[],
}