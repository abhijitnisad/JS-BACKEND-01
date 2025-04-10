import dotenv from "dotenv"
import connectDB from "./db/db.js";  
import {app} from './app.js'

dotenv.config({
    path:'./env'
})

connectDB()

.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`✅ Server is runnign on port :${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})





























/*
import express from "express";
const app = express()
(async () => {
    try {
        mongoose.connect(`${process.env.MONGO_URI}`)
        app.on("error", (error) => {
            console.log("ERROR: " , error);
            throw error
        
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("Error: ", error);
        throw err
        
    }
})()
    */