import mongoose from "mongoose";

const Schema = mongoose.Schema;

const msgSchema = new Schema({
    token: { type:String, required:true },
    
})

const msgModel = mongoose.model('msg',msgSchema, "msg");

module.exports = { msgModel };