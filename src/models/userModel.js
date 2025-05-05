import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    _id : {
        type: 'UUID', 
        required: true
    },
    name: {
        type: String,
        required: [true, "We need to know how to call you!"],
        min: [4, "too short name"],
        max: 50
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: () => {
            return String(this.email).toLowerCase.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        }
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

export default User;