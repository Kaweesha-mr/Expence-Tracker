const { 
    getAllTransactions,
    getTransactionsbyId,
    updateTransaction,
    addTransaction,
    getSumOfIncomeTransactionsByUserId,
    getSumOfExpenseTransactionsByUserId } = require('../services/transactionService');



    const getAllTransactions = async (req,res) => {
        try{
            const transactions = await getAllTransactions(req.params.id);
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
            const transaction = await getTransactionsbyId(req.params.id);
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
            const transaction = await updateTransaction(req.params.id, req.body);
            if(!transaction){
                return res.status(404).json({message: "No transaction found"});
            }
            return res.status(200).json(transaction);
        }
        catch(err){
            return res.status(500).json({message: err.message});
        }
    }

    const addTransaction = async (req,res) => {
        try{
            const transaction = await addTransaction(req.body);
            if(!transaction){
                return res.status(404).json({message: "No transaction found"});
            }
            return res.status(200).json(transaction);
        }
        catch(err){
            return res.status(500).json({message: err.message});
        }
    }

    const getSumOfIncomeTransactionsByUserId = async (req,res) => {
        try{
            const sum = await getSumOfIncomeTransactionsByUserId(req.params.id);
            
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
            const sum = await getSumOfExpenseTransactionsByUserId(req.params.id);
            
            if(!sum){
                return res.status(404).json({message: "No sum found"});
            }
            return res.status(200).json(sum);
        }
        catch(err){
            return res.status(500).json({message: err.message});
        }
    }