import express from 'express'
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js";
import dbConnect from './config/dbConnect.js';
import cors from 'cors';

dotenv.config();
// console.log("CONNECTION_STRING:", process.env.CONNECTION_STRING ? "loaded" : "missing");
dbConnect();



const app = express();


app.use(cors({ origin: 'http://localhost:2999' })); 
app.use(express.json());
app.use("/", authRoutes)


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on bomboclatt port ${PORT}`);
})