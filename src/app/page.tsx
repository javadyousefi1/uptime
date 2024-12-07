"use client"
// components
import PageHeader from "@/components/PageHeader";
import Table from "@/components/table/Table";
import { IAssetsData } from "@/interfaces/assets";
// interface
import { TableColumn } from "@/interfaces/table";

export default function Home() {

  

  const column: TableColumn[] = [
    { title: "id" },
    { title: "name" },
    { title: "serialNo" },
    { title: "driverName" },
    { title: "vinCode" },
    { title: "engineHours" },
    {
      title: "More Detail", render: (object) => {
        console.log(object)
        return <button>more</button>
      }
    },
  ]

  return (
    <main className="container mx-auto mt-10">
      <PageHeader />
      <Table<IAssetsData> column={column} />
    </main>
  );
}
