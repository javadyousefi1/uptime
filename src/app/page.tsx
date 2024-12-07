"use client"
// components
import PageHeader from "@/components/PageHeader";
import Table from "@/components/table/Table";
import useInfiniteQuery from "@/hooks/useInfiniteQuery";
import { IAssetsData } from "@/interfaces/assets";
// interface
import { TableColumn } from "@/interfaces/table";
import { apiGetAllAssets } from "@/services/assets";

export default function Home() {

  const { data, handleFetchMore, hasNextPage, isLoading } = useInfiniteQuery({ queryFn: apiGetAllAssets })
  console.log(data, "data")
  console.log(isLoading, "isLoading")



  const column: TableColumn[] = [
    { title: "id" },
    { title: "name" },
    { title: "serialNo" },
    { title: "driverName" },
    { title: "vinCode" },
    { title: "engineHours" },
    {
      title: "More Detail", render: (object) => {
        return <button>more</button>
      }
    },
  ]

  return (
    <main className="container mx-auto mt-10">
      <PageHeader />
      <button onClick={()=>handleFetchMore()}>freerferferf</button>
      <Table<IAssetsData> column={column} data={data} handleFetchMore={handleFetchMore} hasNextPage={hasNextPage} isLoading={isLoading}/>
    </main>
  );
}
