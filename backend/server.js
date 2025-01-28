import express from 'express';
import dotenv from 'dotenv';
import workoutRoutes from './routes/workouts.js';
import mongoose from 'mongoose';

dotenv.config();
const app=express();
//middleware
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
app.use('/api/workouts',workoutRoutes)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(`connected to DB`);
})
.catch((err)=>{
    console.log(err);
})
app.listen(process.env.PORT, ()=>{
    console.log(`server running at ${process.env.PORT}`);
})