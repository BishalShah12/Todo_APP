import mongoose from "mongoose"


const connectDB = async() => {
    try {
        const connectionMongoDB = await mongoose.connect(`${process.env.MONGODB_URI}/Todo`)
        console.log(`MongoDB connect !! DB HOST : ${connectionMongoDB.connection.host}`,);

    } catch (error) {
        console.log("Server fail to connet",error);
        process.exit(1)
        
    }
} 

export default connectDB
