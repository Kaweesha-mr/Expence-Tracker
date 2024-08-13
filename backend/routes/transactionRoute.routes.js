const transactionController = require('../controllers/transactionController');
const router = require('express').Router();
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/',authMiddleware,transactionController.getAllTransactions);
router.get('/latest',authMiddleware,transactionController.get4Transactions);
router.get('/one/:id',transactionController.getTransactionsbyId);
router.post('/',transactionController.addTransaction);
router.put('/:id',transactionController.updateTransaction);
router.get('/sum/:id',transactionController.getSumOfIncomeTransactionsByUserId);
router.get('/sum/:id',transactionController.getSumOfExpenseTransactionsByUserId);
router.delete('/:id',transactionController.deleteTransactions);

module.exports = router;