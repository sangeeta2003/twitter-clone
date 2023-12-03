import mongoose from "mongoose";
import { initmongoose } from "@/lib/mongoose";
import User from "../../models/user";
export default async function handle(req,res){
    await initmongoose();
    if(req.method === 'PUT'){
        const {username} = req.body;
        res.json({username});
    }
    if(req.mathod === 'GET')
    {
        const id = req.query.id;
        const User = await User.findById(id)
        res.json({User});
    }
    

}