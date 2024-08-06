const express =  require('express');
const {signup,login} = require('../controllers/userController');


//make instance of express router
const router = express.Router();

//login
router.post('/login',login)


//signup
router.post('/signup',signup)

module.exports = router;