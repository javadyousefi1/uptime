"use client"
import { useState } from "react";
// components
import PageHeader from "@/components/PageHeader";
import Table from "@/components/table/Table";
import Modal from "@/components/Modal";
import ModalContent from "@/components/ModalContent";
// hooks
import useInfiniteQuery from "@/hooks/useInfiniteQuery";
// interface
import { IAssetsData } from "@/interfaces/assets";
import { TableColumn } from "@/interfaces/table";
// services
import { apiGetAllAssets } from "@/services/assets";

export default function Home() {
  const [tableModalContent, setTableModalContent] = useState<null | IAssetsData>(null)
  const { data, handleFetchMore, hasNextPage, isLoading, error } = useInfiniteQuery({ queryFn: apiGetAllAssets })

  const handleSetTableModal = (payload: IAssetsData) => setTableModalContent(payload)
  const handleCloseTableModal = () => setTableModalContent(null)
  const column: TableColumn[] = [
    { title: "id" },
    { title: "name" },
    { title: "serialNo" },
    { title: "driverName" },
    { title: "vinCode" },
    { title: "engineHours" },
    {
      title: "More Detail", render: (rowData: IAssetsData) => {
        return <button onClick={() => handleSetTableModal(rowData)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" /><path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" /></svg></button>
      }
    },
  ];

  return (
    <main className="container mx-auto mt-10 h-full">
      <PageHeader />
      <Table<IAssetsData> column={column} data={data} handleFetchMore={handleFetchMore} hasNextPage={hasNextPage} isLoading={isLoading} error={error} />

      <Modal isOpen={!!tableModalContent} onClose={handleCloseTableModal} title={`More info (${tableModalContent?.name})`}>
        <ModalContent {...tableModalContent} />
      </Modal>
    </main>
  );
}
