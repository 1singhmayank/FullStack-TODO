import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        required: false,
        type:String,
        unique:false
    }

    ,
    title:{
        required:true, 
        type:String
    },

    description: {
        required:true,
        type:String,
        length:100},

    },{timeStamps:true})

export const User = mongoose.models.User || mongoose.model("User",userSchema)
