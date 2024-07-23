const mongoose = require('mongoose')
require('dotenv').config();


const ConnectDb = async () => {

    try{

        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('MongoDB Connection Successful')
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = ConnectDb;