import { useEffect, useState } from "react";

const useInfiniteQuery = ({ queryFn }) => {
    const PAGE_SIZE = 10
    const [isLoading, setIsLoading] = useState(false)
    const [totalCount, setTotalCount] = useState(null)
    const [hasNextPage, setHasNextPage] = useState<null | boolean>(true)
    const [data, setData] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);

    const handleFetchMore = () => {
        if (hasNextPage) {
            setPageIndex(prev => ++prev)
        }
    }

    useEffect(() => {
        if (hasNextPage === false) return
        setIsLoading(true)
        queryFn({ pageSize: PAGE_SIZE, pageIndex: pageIndex }).then(res => {
            if (!totalCount) setTotalCount(res.data.totalCount)

            const newData = res.data.items
            console.log(data, "log amir")
            const newStateValue = [...data, ...newData]

            console.log("newStateValue.length", newStateValue.length)
            console.log("totalCount", totalCount)

            if (newStateValue.length === totalCount) {
                setHasNextPage(false)
            } else {
                setHasNextPage(true)
            }

            setData(newStateValue)
            setIsLoading(false)
        })


    }, [pageIndex])

    console.log(hasNextPage, "hasNextPage")

    return { data, handleFetchMore, hasNextPage, isLoading }

}

export default useInfiniteQuery