const mongoose = require('mongoose');
const {Schema} = mongoose;


const TransactionSchema = new Schema({
    userId:{
        type: String,
        unique: true,
        required: true
    },
    title:{
        type: String,
        enum: ['Income', 'Expense'],
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