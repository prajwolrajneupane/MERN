import express from "express"
const router=express.Router();
import multer from "multer"
import mongoose from "mongoose"
import { Product } from "../../model/user.model.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueName + '.jpg'); // force .jpg extension
  },
});

const upload = multer({ storage });
// this much nei pani will do the job(along with the code below in / ofc) but teso garda euta afnai naam generate garxa, we can fix that using diskStroge by which we can tell kasari save garne vanera 


router.use('/', express.static('uploads'));
// express static is a built in middleware funcntion in express.js jun chai is used to serve static files like images, htmls, pdfs, etc
// so the code above tells express to look inside uploads, when someone requests /

router.post("/",upload.single("image"),async (req,res)=>{
    // const users=await Product.create(req.body)
    // Express by default cannot read multipart/form-data unless we have middlewares lile multer
    // k vanya vanda, req.body expects json ra we aint sending json from front
    // we could send json IF we didnt have image with us, image thena vane, we couldve put uta ko data in json format and it would have work
    // 
    try{
          
    const { name, price } = req.body;
    const image = req.file?.filename  || null;
    const product = await Product.create({ name, price, image });
    }
    catch(err){
console.log("Errpr:"+err)
    }
})

// ok we creating a upload middleware
//k vanya ta vanda, user le upload garya lai upload vitra haldim

router.delete("/:name",async (req,res)=>{
    const {name}=req.params;
    try{
        await Product.findOneAndDelete({name});
res.status(200).json({message:"Product deleted"});

    }
    
    catch(error){
        res.status(400).json({message:"product not found"})
    }
})

router.put("/:name",async (req,res)=>{
    const {name}=req.params;
    const product=req.body;
    
    try{
await Product.findOneAndUpdate({name},product);
res.status(200).json({message:"Product updated"});

    }
    
    catch(error){
res.status(400).json({message:"product ki mkc found"})
}
})

router.get("/",async (req,res)=>{
  const allProducts = await Product.find();
  res.status(200).json(allProducts);
})
export default router;