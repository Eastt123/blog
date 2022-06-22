import mongoose from "mongoose";

const blogShcema = new mongoose.Schema({
    title: String,
    author:String,
    text:String,
    tags:[String],
    image:String,
    createdAt:{
        type:Date,
        default: new Date()
    },
});

const blog = mongoose.model("Blog", blogShcema);

export default blog;