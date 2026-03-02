import mongoose, { Mongoose } from "mongoose";

const userShema = new Mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    CreatedAt: {type: Date, default: Date.now}
})

export const User = mongoose.model("User", userShema)