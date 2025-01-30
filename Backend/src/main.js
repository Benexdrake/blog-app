import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

import { articleModel } from './db_context.js'

dotenv.config();

const model = articleModel();

const app = express();
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Server is running...'));

app.get('/articles', async (req, res) => 
{
    const data = await model.find();
    return res.status(200).send(data)
})

app.post('/articles', async (req,res) =>
{
    const article = req.body
    
    if(!article) return res.status(200).send('..!..')
    
    await model.create(article)
    return res.status(200).send(article)
})

// PUT

// DELETE
