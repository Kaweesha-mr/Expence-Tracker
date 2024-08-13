const recipies = require('../services/transactionService');



    const getAllTransactions = async (req,res) => {
        const userId = req.user._id;

        try{

            const transactions = await recipies.getAllTransactions(userId);
            if(!transactions){
                return res.status(404).json({message: "No transactions found"});
            }

            return res.status(200).json(transactions);
        }
        catch(err){
            return res.status(500).json({message: err.message});
        }
    }


    const get4Transactions = async (req,res) => {
        const userId = req.user._id;

        try{

            const transactions = await recipies.get4Transactions(userId);
            if(!transactions){
                return res.status(404).json({message: "No transactions found"});
            }
            
            return res.status(200).json(transactions);
        }
        catch(err){
            return res.status(500).json({message: err.message});
        }
    }
    const getTransactionsbyId = async (req,res) => {
        try{
            const transaction = await recipies.getTransactionsbyId(req.params.id);
            if(!transaction){
                return res.status(404).json({message: "No transaction found"});
            }
            return res.status(200).json(transaction);
        }
        catch(err){
            return res.status(500).json({message: err.message});
        }
    }

    const updateTransaction = async (req,res) => {
        try{
            const transaction = await recipies.updateTransaction(req.params.id, req.body);
            if(!transaction){
                return res.status(404).json({message: "No transaction found"});
            }
            return res.status(200).json({message: "Transaction updated successfully"});
        }
        catch(err){
            return res.status(500).json({message: err.message});
        }
    }

    const deleteTransactions = async (req,res) => {
        try{
            const rs = await recipies.deleteTransaction(req.params.id);
            if(!rs){
                return res.status(404).json({message: "No transaction found"});
            }
            return res.status(200).json({message: "Transaction deleted successfully"});
        }
        catch(err){
            return res.status(500).json({message: err.message});
        }
    }

    const addTransaction = async (req,res) => {
        try{

            if(!req.body){
                return res.status(400).json({message: "Please provide transaction details"});
            }

            console.log(req.body);

            const transaction = await recipies.addTransaction(req.body);
            
            if(!transaction){
                return res.status(404).json({message: "No transaction found"});
            }
            return res.status(200).json(transaction);
        }
        catch(err){
            console.log(err);
            return res.status(500).json({message: err.message});
        }
    }

    const getSumOfIncomeTransactionsByUserId = async (req,res) => {
        try{
            const sum = await recipies.getSumOfIncomeTransactionsByUserId(req.params.id);
            
            if(!sum){
                return res.status(404).json({message: "No sum found"});
            }
            return res.status(200).json(sum);
        }
        catch(err){
            return res.status(500).json({message: err.message});
        }
    }

    const getSumOfExpenseTransactionsByUserId = async (req,res) => {
        try{
            const sum = await recipies.getSumOfExpenseTransactionsByUserId(req.params.id);
            
            if(!sum){
                return res.status(404).json({message: "No sum found"});
            }
            return res.status(200).json(sum);
        }
        catch(err){
            return res.status(500).json({message: err.message});
        }
    }


    module.exports = {
        getAllTransactions,
        getTransactionsbyId,
        get4Transactions,
        updateTransaction,
        addTransaction,
        getSumOfIncomeTransactionsByUserId,
        getSumOfExpenseTransactionsByUserId,
        deleteTransactions
    }