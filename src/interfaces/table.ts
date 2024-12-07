export interface TableColumn {
    title: string,
}

export interface TableProps<T> {
    data: T[]
    column: TableColumn[],
}