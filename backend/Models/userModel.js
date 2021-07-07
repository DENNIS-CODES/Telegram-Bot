import mongoose from "mongoose";

const Schema = mongoose.Schema;

const msgSchema = new Schema({
    msgSchema: {
        type:String,
        required:true
    }
})

const msgModel = mongoose.model('msg',msgSchema);

module.exports = { msgModel };