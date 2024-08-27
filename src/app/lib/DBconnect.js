import mongoose from "mongoose";

let connection={}

export const DBconnect = async()=>{

try {
    if(connection.isConnected)
{
    console.log("Database is already connected");
    
    return ;
}
 
const DB =await mongoose.connect(process.env.MONGO_URL)

    
connection.isConnected = DB.connections[0].readyState;
console.log("DB connected successfully");



} catch (error) {
    console.log(error.message);
    
}

}