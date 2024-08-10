const transactionController = require('../controllers/transactionController');
const router = require('express').Router();
const express = require('express');



router.get('/:id',transactionController.getAllTransactions);
router.get('/one/:id',transactionController.getTransactionsbyId);
router.post('/',transactionController.addTransaction);
router.put('/:id',transactionController.updateTransaction);
router.get('/sum/:id',transactionController.getSumOfIncomeTransactionsByUserId);
router.get('/sum/:id',transactionController.getSumOfExpenseTransactionsByUserId);
router.delete('/:id',transactionController.deleteTransactions);

module.exports = router;