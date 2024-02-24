import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_SEEKING_WEBSITE"
    }).then(()=>{
        console.log('Connected to DB')
    }).catch((err)=>{
        console.log(`Error Occured: ${err}`)
    })
}