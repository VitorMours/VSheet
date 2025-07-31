import mongoose from "mongoose";
const { Schema, model } = moongose;

const userSchema = new Schema({
	name: String
	surname: String
	email: String
	password: String 
	createdAt: Date
	modifiedAt: Date
});


const User = model("User", userSchema);
export default User;