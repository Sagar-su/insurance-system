const verifyAdmin=( req,res,next)=>{
    const data = req.body;
    
    
    if(data.username= "Sahil" && data.passcode=== "test12345"){

        next();

    }
    else{
        res.send("Wrong Credentials")
    }
}

module.exports = verifyAdmin 
