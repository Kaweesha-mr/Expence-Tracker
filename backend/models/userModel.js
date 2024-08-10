const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')


const Schema = mongoose.Schema


const userSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required:true
    }
})


//static signIn function
userSchema.statics.signUp = async function (email,password) {
    //validation
    if(!email || !password){
        throw Error("Fields are Empty")
    }

    if(!validator.isEmail(email)){
        throw Error("Enter Valid Email")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password is not Strong")
    }

    const exsits = await this.findOne({email:email})
    if(exsits){
        throw Error('Email already used')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)


    const user = await this.create({email,password:hash})

    return user
}

//static login function

userSchema.statics.login = async function (email,password){

    if(!email || !password){
        throw Error("Fields are Empty")
    }

    const user = await this.findOne({email:email})
    
    if(!user){
        throw Error('Incorrect Email')
    }

    const match  = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect Password')
    }

    return { email: user.email, _id: user._id };

}

module.exports = mongoose.model('User', userSchema)