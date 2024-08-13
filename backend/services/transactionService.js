const Transaction = require('../models/transactionModel');

const getAllTransactions = async(UserId) => {
    return await Transaction.find({userId:UserId});
}

//get only 1st for 4 latest transactions

const get4Transactions = async(UserId) => {
    return await Transaction.find({userId:UserId}).sort({createdAt:-1}).limit(4);
}


const getTransactionsbyId = async(id) => {
    return await Transaction.findById(id);
}

const updateTransaction = async(id,transaction) => {
    return await Transaction.findByIdAndUpdate(id,transaction,{new:true});
}

const addTransaction = async (transaction) => {
    return await Transaction.create(transaction);
}

const deleteTransaction = async(id) => {
    return await Transaction.findByIdAndDelete(id);
}

const getSumOfIncomeTransactionsByUserId = async(UserId) => {
    return await Transaction.aggregate([
        {
            $match: {
                userId: UserId,
                type: 'income'
            }
        },
        {
            $group: {
                _id: null,
                total: {
                    $sum: '$amount'
                }
            }
        }
    ]);
}

const getSumOfExpenseTransactionsByUserId = async(UserId) => {
    return await Transaction.aggregate([
        {
            $match: {
                userId: UserId,
                type: 'expense'
            }
        },
        {
            $group: {
                _id: null,
                total: {
                    $sum: '$amount'
                }
            }
        }
    ]);
}



module.exports = {
    getAllTransactions,
    getTransactionsbyId,
    updateTransaction,
    addTransaction,
    getSumOfIncomeTransactionsByUserId,
    getSumOfExpenseTransactionsByUserId,
    deleteTransaction,
    get4Transactions
}