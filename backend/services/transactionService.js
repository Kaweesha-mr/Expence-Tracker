const Transaction = require('../models/transactionModel');

const getAllTransactions = async(UserId) => {
    return await Transaction.find({userId:UserId});
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
    getSumOfExpenseTransactionsByUserId
}