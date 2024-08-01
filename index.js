const express = require(`express`);
const User = require("./user.Schema");
const dbconnect = ("./db");
const app = express();

app.use(express.json);

app.get('/',async(req,res)=>{
    const data = await User.find();
    res.send(data)
})

app.post("/",async(req,res)=>{
    console.log(req.body);
    let data= awaituser.create(req.body);
    req.send("done");
})
app.delete("/:id",async(req,res)=>{
    let(id)= req.params
    let data = await user.findByIdAndDelete(id)
    res.send(data)
})
app.patch("/:id",async(req,res)=>{
    let(id) = req.params
    let data = await user.findByIdAndUpdate(id,req,body)
    req.send(data)
}
)
app.listen = express (9091,(req,res)=>{
    console.log('strating...');
    dbconnect();
})