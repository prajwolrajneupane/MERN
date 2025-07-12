import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db.js";
import ProductRoutes from "./route/product.route.js"
dotenv.config();
const app=express();
app.use(express.json()) //allows us to accept json data in the req.body
app.use(cors())
app.use(express.urlencoded({extended:false})) //this url helps to parse form data


console.log(process.env.MONGO_URI);

app.listen(process.env.PORT,()=>{
    connectDB();

})


app.use("/products",ProductRoutes)