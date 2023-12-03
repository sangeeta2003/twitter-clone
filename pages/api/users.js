import mongoose from "mongoose";
import { initmongoose } from "@/lib/mongoose";
import User from "../../models/user";
import { unstable_batchedUpdates } from "react-dom";
import { unstable_getServerSession } from "next-auth";
export default async function handle(req,res){
    await initmongoose();
    unstable_getServerSession(req,res)
    if(req.method === 'PUT'){
        const {username} = req.body;
        User.findByIdAndUpdate()
        res.json({username});
    }
    if(req.mathod === 'GET')
    {
        const id = req.query.id;
        const User = await User.findById(id)
        res.json({User});
    }
    

}