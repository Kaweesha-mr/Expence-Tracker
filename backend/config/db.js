const mongoose = require('mongoose')
require('dotenv').config();


const ConnectDb = async () => {

    try{

        await mongoose.connect("mongodb+srv://admin:admin@intern.tsezuqx.mongodb.net/?retryWrites=true&w=majority&appName=intern",{
            useNewUrlParser: true
        })

        console.log('MongoDB Connection Successful')
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = ConnectDb;