const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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


userSchema.statics.signUp = async function (email,password) {

    const exsits = await this.findOne({email:email})

    if(exsits){
        throw Error('Email already used')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)


    const user = await this.create({email,password:hash})

    return hash

}

module.exports = mongoose.model('User', userSchema)