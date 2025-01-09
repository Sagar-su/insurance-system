const express = require('express'); 
const assignToken = require('../controller/loginController');
const verifyAdmin = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/',verifyAdmin, assignToken);


module.exports = router