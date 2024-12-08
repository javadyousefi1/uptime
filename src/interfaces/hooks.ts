import { IPagintateQuery } from "./common";

export interface IUseInfiniteQuery { queryFn: (query: IPagintateQuery) => Promise<any> }