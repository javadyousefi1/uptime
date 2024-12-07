"use client"
import { TableProps } from "@/interfaces/table";
import { useMemo } from "react";

function Table<T>({ column, data = [], handleFetchMore, hasNextPage, isLoading }: TableProps<T>) {

    const columnList = useMemo(() => column?.map(item => item.title), [column])

    return (
        <>
                <table border={1} className="w-full border mt-10" key={"tableKey"}>

                    <tbody>
                        <tr>
                            {columnList.length > 0 && columnList.map(item => <th key={`table-col-${item}`}>{item}</th>)}
                        </tr>
                        {data.map((item, index) => {
                            return (
                                <tr key={`table-row-${item.id}`} className="border h-[180px]">
                                    {column.map((innerItem, innerIndex) => <td key={`table-items-${innerIndex}`}>{innerItem.render ? innerItem.render(item) : item[innerItem.title]}</td>)}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </>
    );
}

export default Table;