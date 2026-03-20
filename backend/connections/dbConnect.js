import mongoose from "mongoose";
import dns from 'dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo DB Connected`)
    } catch (error) {
        console.log(`Mongo DB connection failed`, error.message)
    }
}

export default dbConnect;
