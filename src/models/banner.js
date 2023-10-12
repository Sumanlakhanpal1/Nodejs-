const mongoose = require('mongoose')
const bannersection = mongoose.Schema({
    content:String,
    description:String,
    imageurl:String
})
module.exports= mongoose.model("banner",bannersection)