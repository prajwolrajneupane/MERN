import { Product } from "../model/user.model"

export const getProducts=async (req ,res)=>{
try{
 const products=await Product.find({});

res.status(200).json({success:true,data:products})

}
catch(error)
{
    res.status(500).json({message:"server error"})
}
}