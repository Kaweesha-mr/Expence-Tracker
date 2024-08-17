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

const getSumOfIncomeTransactionsByUserId = async (UserId) => {
    try {
        // Since userId is a string, no need to cast to ObjectId
        const result = await Transaction.aggregate([
            {
                $match: {
                    userId: UserId, // Ensure UserId is a string
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

        console.log("Result:", result);

        return result.length > 0 ? result[0].total : 0;
    } catch (error) {
        console.error("Error fetching sum of income transactions:", error);
        throw error;
    }
}


const getSumOfExpenseTransactionsByUserId = async (UserId) => {
    try {
        // Since userId is a string, no need to cast to ObjectId
        const result = await Transaction.aggregate([
            {
                $match: {
                    userId: UserId, // Ensure UserId is a string
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

        return result.length > 0 ? result[0].total : 0;
    } catch (error) {
        console.error("Error fetching sum of expense transactions:", error);
        throw error;
    }
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