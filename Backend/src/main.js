import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors())

app.listen(3000, () => console.log('Server is running...'));

app.get('/', (req, res) => 
{
    return res.status(200).send('HALLO')
})