import axios from "./axios";
// interfaces
import { IPagintateQuery, IServerReuslt } from "@/interfaces/common";
import { IAssetsData } from "@/interfaces/assets";

export async function apiGetAllAssets(query: IPagintateQuery): Promise<IServerReuslt<IAssetsData>> {
    const { data } = await axios.get("/Asset/GetAll", { params: query })
    return data;
}