const mongoose = require('mongoose');
const {Schema} = mongoose;


const TransactionSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum: ['income', 'expense'],
        required: true
    },
    description:{
        type: String,

    },
    amount:{
        type: Number,
        required: true,
        min: 0
    }
}, {timestamps: true});


module.exports =  mongoose.model('Transaction', TransactionSchema);