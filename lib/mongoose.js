import mongoose from "mongoose";
export async function initmongoose (){
await mongoose.connect(process.env.MONGODB-URI);

}
