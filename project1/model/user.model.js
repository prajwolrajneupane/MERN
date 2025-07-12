import mongoose from "mongoose";
const productSchema=mongoose.Schema({
name:{
    type:String,
    required:true
}
,
price:{
    type:Number,
    required:true

},
image:{
    type:String,
    
},
},{timestamps:true})


export const Product=mongoose.model("Product",productSchema);
