const express= require('express');
// const  getAllUsers  = require('../route/userRoutes');
const adminLogin = require('./route/loginRoute')

const listUsers = require('./route/usersDbRoute')



const app= express();
const PORT= process.env.PORT ||4000


app.use(express.json())

app.use('/login',adminLogin)
// app.use('/users',getAllUsers)
app.use('/users',listUsers)

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})