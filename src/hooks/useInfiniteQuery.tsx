"use client"
import { useEffect, useState } from "react";
// iterface
import { type IUseInfiniteQuery } from "@/interfaces/hooks";

const useInfiniteQuery = ({ queryFn }: IUseInfiniteQuery) => {
    const PAGE_SIZE = 10
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false)
    const [totalCount, setTotalCount] = useState(null)
    const [pageIndex, setPageIndex] = useState(1);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true)

    const handleFetchMore = () => {
        if (hasNextPage && !isLoading) {
            setPageIndex((prev) => prev + 1);
        }
    };

    useEffect(() => {
        // set hasNextPage status for controlling next request
        if (data.length === totalCount) {
            setHasNextPage(false)
        } else {
            setHasNextPage(true)
        }
        if (hasNextPage === false || data.length === totalCount) return // prevent extra request if all data gets successfully
        setIsLoading(true) // set loading 
        queryFn({ pageSize: PAGE_SIZE, pageIndex: pageIndex }).then(res => {
            if (!totalCount) setTotalCount(res.data.totalCount)
            const newData = res.data.items
            setData((prev) => [...prev, ...newData]); // concat new data with old data
            setIsLoading(false)
        }).catch(err => {
            setError(true)
        })

    }, [pageIndex])


    return { data, handleFetchMore, hasNextPage, isLoading, error }

}

export default useInfiniteQuery