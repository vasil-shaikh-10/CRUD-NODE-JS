
const mongoose = require("mongoose");

const userschema = new mongoose.Schema({

        username :String,
        number : Number,
        email : String,
        password : String
})

let user = mongoose.model("vasil",userschema);
module.exports = user;