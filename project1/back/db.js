import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
export const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
    }
    catch{
        console.log("nigga marda nigga marda nigga marda hai hai")
    }
}