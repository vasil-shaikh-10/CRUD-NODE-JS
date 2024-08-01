const isvalid = (req,res,next)=>{
    let (email,password,username)= req.body

    if(email && username && password){
        next();
    }else{
        res.send("invalid data")
    }
}

module.exports = isvalid;