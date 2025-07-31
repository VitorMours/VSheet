import mongoose from "mongoose";


async function connectMongo() {
	await mongoose.connect(process.env.MONGO_URI);
}