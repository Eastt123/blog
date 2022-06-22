import { Request, Response } from "express";
import User from "../models/userModel";
import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    expires:{
        type:Date
    }
    ,
    session:{
        type:Object,
        required:true
    }
});

const sessionDB = mongoose.model("session", sessionSchema);

const isAuth = async (req: Request, res: Response, next: any) => {
    console.log(123456);

    // try {
    //     const session = await sessionDB.findById(req.sessionID);
    //     const _id = session.session.userID.toString();
    //     const user = await User.find({_id});
    //     if(!user){
    //         throw Error()
    //     }
    //     req.user = user;
    //     next();

    // } catch (error) {
    //     console.log(error)
    //     res.status(401).send({error:"Please authenticate"})
    // }






}


export default isAuth;
