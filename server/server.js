import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';


//App config

const PORT=process.env.PORT||4000;
const app=express();
await connectDB();

//Middlewares
app.use(cors());
app.use(express.json())

//API routes

app.get('/',(req,res)=>{
    res.send('api working')
})

app.listen(PORT,()=>{
    console.log('server running on PORT'+ PORT)
})