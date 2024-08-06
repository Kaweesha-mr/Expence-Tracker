const User = require('../models/userModel')

const login = async (req,res) => {
    res.json({mssg: "login"});
}


const signup = async (req,res) => {
    const {email,password} = req.body

    try{
        const user = await User.signUp(email,password)
        res.status(200).json({email,user})
    }
    catch(error){

        res.status(500).json({error: error.message})

    }

    
}


module.exports = { signup, login };