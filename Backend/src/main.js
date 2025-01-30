import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();


//DB
const dbUrl = process.env.DB
mongoose.connect(dbUrl).then(() => {console.log('HI from DB')}) 

const userSchema = new mongoose.Schema(
{
    name:String,
    age:Number,
});

const UserModel = mongoose.model("users", userSchema)


const app = express();
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Server is running...'));

app.get('/', async (req, res) => 
{
    const user = await UserModel.create({
        name:'HALLO',
        age:1111
    })

    const userData = await UserModel.find();
    return res.status(200).send(userData)
})
