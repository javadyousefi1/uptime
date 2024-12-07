"use client"
import { useEffect, useState } from "react";

const useInfiniteQuery = ({ queryFn }) => {
    const PAGE_SIZE = 10
    const [isLoading, setIsLoading] = useState(false)
    const [totalCount, setTotalCount] = useState(null)
    const [hasNextPage, setHasNextPage] = useState<null | boolean>(true)
    const [data, setData] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);

    const handleFetchMore = () => {
        console.log("handle fetch more rns")
        if (hasNextPage && !isLoading) {
          setPageIndex((prev) => prev + 1);
        }
      };

    useEffect(() => {
        if (hasNextPage === false || data.length === totalCount) return
        setIsLoading(true)
        queryFn({ pageSize: PAGE_SIZE, pageIndex: pageIndex }).then(res => {
            if (!totalCount) setTotalCount(res.data.totalCount)

            const newData = res.data.items
            setData((prev) => [...prev, ...newData]);

            console.log(data, "log amir")
            const newStateValue = [...data, ...newData]

            console.log("newStateValue.length", newStateValue.length)
            console.log("totalCount", totalCount)

            if (newStateValue.length === totalCount) {
                setHasNextPage(false)
            } else {
                setHasNextPage(true)
            }

            setIsLoading(false)
        })


    }, [pageIndex])

    console.log(hasNextPage, "hasNextPage")

    return { data, handleFetchMore, hasNextPage, isLoading }

}

export default useInfiniteQuery