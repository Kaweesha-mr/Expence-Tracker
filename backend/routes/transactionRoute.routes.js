const transactionController = require('../controllers/transactionController');
const router = require('express').Router();
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/',authMiddleware,transactionController.getAllTransactions);
router.get('/latest',authMiddleware,transactionController.get4Transactions);
router.get('/one/:id',transactionController.getTransactionsbyId);
router.post('/',transactionController.addTransaction);
router.put('/:id',authMiddleware,transactionController.updateTransaction);
router.get('/sumIncome',authMiddleware,transactionController.getSumOfIncomeTransactionsByUserId);
router.get('/sumExpense',authMiddleware,transactionController.getSumOfExpenseTransactionsByUserId);
router.delete('/:id',authMiddleware,transactionController.deleteTransactions);

module.exports = router;