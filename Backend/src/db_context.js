import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();


//DB
const dbUrl = process.env.DB
mongoose.connect(dbUrl).then(() => {console.log('HI from DB')}) 

export const articleModel = () =>
{
    const articleSchema = new mongoose.Schema(
    {
        id:String,
        title:String,
        headerImage:String,
        description:String,
        tags:[String],
        date:Date,
        user:{
            id:String,
            name:String
        },
        elements:Object
    });
    
    return mongoose.model("articles", articleSchema)
}