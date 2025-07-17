import mongoose from "mongoose";
const commentSchema= new mongoose.Schema({
videoId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Video",
    // export default mongoose.model('Video', videoSchema);
    // its taking reference from here
    // we dont need to explicitly import the "Video", it will just happen
required:true,
},
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
},
text:{
    type:String,
    required:true,
    trim:true
}
},
{
    timestamps:true
})

export const Comment= mongoose.model("Comment",commentSchema);