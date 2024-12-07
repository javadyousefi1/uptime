"use client"
import { TableProps } from "@/interfaces/table";
import { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Table<T>({ column, data = [], handleFetchMore, hasNextPage, isLoading }: TableProps<T>) {

    const columnList = useMemo(() => column?.map(item => item.title), [column])
    return (
        <>
            <div id="scrollableDiv" style={{ height: "100%", overflow: "auto" }}>
                <InfiniteScroll
                    dataLength={53}
                    next={handleFetchMore}
                    hasMore={true}
                    // pullDownToRefresh
                    // pullDownToRefreshThreshold={50}
                    // scrollableTarget="scrollableDiv"
                    loader={
                        <div>
                            loader
                        </div>
                    }
                >
                    <table border={1} id="scrollableDiv" className="w-full border mt-10" key={`tableKey-${data.length}`}>
                        <thead>
                            <tr>
                                <th>#</th>
                                {columnList.map((item, index) => (
                                    <th key={`table-col-${item}-${index}`}>{item}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id ?? `table-row-${index}`} className="border jh-[180px]">
                                    <td>{index + 1}</td>
                                    {column.map((col, colIndex) => (
                                        <td key={`table-item-${index}-${colIndex}`}>
                                            {col.render ? col.render(item) : item[col.title]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </InfiniteScroll>
            </div>
        </>
    );
}

export default Table;