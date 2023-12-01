import mongoose from "mongoose";
import { initmongoose } from "@/lib/mongoose";
export default async function handle(req,res){
    await initmongoose();
    res.json('ok');

}