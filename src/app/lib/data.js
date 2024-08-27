import { FetchUser } from "./fetch"

export const Data=async ()=>{

    const Info= await FetchUser()
    return Info;
}