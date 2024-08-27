"use server"

import { redirect } from 'next/navigation';
import { DBconnect } from "./DBconnect";
import { User } from "./model";
import { revalidatePath } from 'next/cache';
const addUser = async(formData)=>{
        const {title,description}=Object.fromEntries(formData);
    try {
    
        DBconnect();  
        const addToDo = new User({
           
            title,
            description
        })
        await addToDo.save();
    } catch (error) {
        console.log(error)
    }
    revalidatePath('/todo');

    redirect('/todo')
    }

export const UpdateUser = async(formData)=>{

        const {id,title,description}=Object.fromEntries(formData);
    try {
    
        DBconnect();  
const update={
    title,
    description
}


Object.keys(update).forEach(

    key=>update[key]==="" && delete update[key]
)
await User.findByIdAndUpdate(id,update)
       

} catch (error) {
        console.log(error)
    }
    redirect('/todo')

    }

    export default addUser;


    
   export const DeleteTask = async(formData)=>{
        const {id}=Object.fromEntries(formData);
        try {
    
        DBconnect();  
       await User.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
    }
    revalidatePath('/todo');

    redirect('/todo')
    }