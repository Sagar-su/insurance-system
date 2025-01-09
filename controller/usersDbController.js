
const {getAllUsers,addUser} =require('../DbModels/usersModel')
const client = require('../client')

const getUsers=async(req,res)=>{
try{
        const result= await client.get("userData");
            if(!result){
                
                const usersData = await getAllUsers();
                await client.set("userData",JSON.stringify(usersData,null,2));
                res.json(usersData)

            }
            else{
                res.json(JSON.parse(result));
            }
            
      

    }
    catch(error){
        res.json(error.message);
        
    }
// res.json("working")
}
const addNewUser= (req,res)=>{
    const newUserData = req.body;
    const newUser = addUser(newUserData);
    res.json(newUser);


}


module.exports ={
    getUsers,
    addNewUser
}