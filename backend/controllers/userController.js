const User = require('../models/userModel')
const jwt = require('jsonwebtoken')



const generateToken = (_id, email) => {
    try {
        const token =  jwt.sign({ _id, email }, process.env.jwt_secret, { expiresIn: '3d' });
        return token;        
    } catch (error) {
        console.error('Error generating token:', error);
        return null;
    }
}

const login = async (req,res) => {

    const {email,password} = req.body


    try{
        const user = await User.login(email,password)
        const token  = generateToken(user._id,user.email)
        res.status(200).json({user,token})
    }
    catch(error){

        res.status(500).json(error.message)
    }
    
}


const signup = async (req,res) => {
    const {email,password} = req.body

    const token  = genrateToken(User._id)

    try{
        const user = await User.signUp(email,password)
        res.status(200).json({email,token})
    }
    catch(error){

        res.status(500).json({error: error.message})

    }

    
}


module.exports = { signup, login };