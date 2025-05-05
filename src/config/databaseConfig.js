import mongoose from "mongoose";

async function connectDatabase(){
    await mongoose.connect(
        process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    return mongoose;
}


export default connectDatabase;