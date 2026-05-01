import mongoose from "mongoose";

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo DB Connected`)
    } catch (error) {
        console.log(`Mongo DB connection failed`, error.message)
    }
}

export default dbConnect;
