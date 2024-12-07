import { type ReactNode } from "react";

export interface TableColumn {
    title: string,
    render?0: () => ReactNode
}

export interface TableProps<T> {
    column: TableColumn[],
}