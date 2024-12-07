import axios from "./axios";
// interfaces
import { IServerReuslt } from "@/interfaces/common";
import { IAssetsData } from "@/interfaces/assets";

export async function apiGetAllAssets(): Promise<IServerReuslt<IAssetsData>> {
    const { data } = await axios.get("/Asset/GetAll")
    return data;
}