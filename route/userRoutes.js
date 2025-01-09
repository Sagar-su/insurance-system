const express = require('express'); 
const { getAllUsers,addNewUser ,getUser} = require('../controller/usersController');
const {validateNewUser,validateUser}= require('../middleware/usersMiddleware')
const verifyToken = require('../middleware/verifyToken')
const router = express.Router();

router.get('/',verifyToken,getAllUsers);
router.post('/',validateNewUser,addNewUser);
router.get("/:id",validateUser,getUser)

module.exports = router
