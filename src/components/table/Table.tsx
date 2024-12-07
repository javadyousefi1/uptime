"use client";
import { TableProps } from "@/interfaces/table";
import { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner";

function Table<T>({ column, data = [], handleFetchMore, hasNextPage, isLoading }: TableProps<T>) {

    // get more data if the inner height more than or content
    useEffect(() => {
        const checkScroll = () => {
            if (document.documentElement.scrollHeight <= window.innerHeight) {
                handleFetchMore();
            }
        };

        checkScroll(); // Check on mount
        window.addEventListener('resize', checkScroll); // Check on resize

        return () => {
            window.removeEventListener('resize', checkScroll); // Cleanup
        };
    }, [data]);

    const columnList = useMemo(() => column?.map(item => item.title), [column]);
    return (
        <>
            <div id="scrollableDiv" style={{ height: "100%", overflow: "auto" }}>
                <InfiniteScroll
                    dataLength={data?.length}
                    next={handleFetchMore}
                    hasMore={hasNextPage}
                    loader={
                        <div className="flex justify-center py-4">
                            {hasNextPage &&
                                <div className="flex gap-x-4 items-center">
                                    <Spinner />
                                    <span>
                                        {data?.length === 0 ? "Loading..." : "Loading more..."}
                                    </span>
                                </div>
                            }
                        </div>
                    }
                >
                    <table className="w-full border-collapse my-10" key={`tableKey-${data.length}`}>
                        <thead className="bg-gray-200 text-center">
                            <tr>
                                <th className="px-4 py-2 text-center">#</th>
                                {columnList.map((item, index) => (
                                    <th key={`table-col-${item}-${index}`} className="px-4 py-2 text-center">{item}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item: T, index: number) => (
                                <tr
                                    key={item.id ?? `table-row-${index}`}
                                    className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                                >
                                    <td className="px-4 py-2 text-center">{index + 1}</td>
                                    {column.map((col, colIndex) => (
                                        <td key={`table-item-${index}-${colIndex}`} className="px-4 py-2 text-center">
                                            {col.render ? col.render(item) : (item[col.title] ?? "-")}
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
