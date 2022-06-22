import mongoose from "mongoose";
import {Request, Response} from "express";
import blog from "../models/blogModel";

export const getBlog = async (req:Request, res:Response) => {

    try {

        const blogs = await blog.find();

        res.status(200).json(blogs);

    } catch (error) {
        console.log(error);
    }
}

export const getBlogById = async (req: Request, res:Response) => {




}

export const createBlog = async (req:Request, res:Response) => {


    const {title, author, image, text, tags} = req.body;


    const blogPost = {
        title:title,
        author:author,
        text:text,
        tags:tags,
        image: image
    }

    const newBlog = new blog(blogPost)

    try {

       await newBlog.save();

       res.status(201).json(newBlog);


    } catch (error) {
        res.status(409).json({message:error.message})

    }
}

export const deleteBlog = async (req:Request, res:Response) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id) ) return res.status(406).json({message:"invalid ID"});

    await blog.findByIdAndRemove({_id:id});
    res.json({message:" Deleted successfully"})



}

export const editPost = async (req:Request, res:Response) => {


}
export const getBlogBySearch = async (req:Request, res:Response) => {

}

export const likeBlog = async (req:Request, res:Response) => {

}

