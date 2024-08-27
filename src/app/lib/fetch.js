import { DBconnect } from "./DBconnect";
import { User } from "./model";


const FetchUserId = async(id)=>{
    try {
DBconnect()
    const data = await User.findById(id)
    return data;
} catch (error) {
    console.log(error.message);
}
}

export default FetchUserId;

export const FetchUser = async()=>{
    try {
DBconnect()
    const data = await User.find()
    return data;
} catch (error) {
    console.log(error.message);
}
}

