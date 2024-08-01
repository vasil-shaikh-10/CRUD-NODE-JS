const mangoose = require ('mangoose');
const dbconnect = async()=>{
        await mangoose.connect("mongodb://127.0.0.1:27017/node");
        console.log("connected the db");
}

module.exports = dbconnect;