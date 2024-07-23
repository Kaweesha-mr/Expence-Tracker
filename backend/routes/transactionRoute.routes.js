const transactionController = require('../controllers/transactionController');
const router = require('express').Router();
const express = require('express');
const { requiresAuth } = require('express-openid-connect');


router.get('/:id',requiresAuth(),transactionController.getAllTransactions);
router.get('/one/:id',requiresAuth(),transactionController.getTransactionsbyId);
router.post('/',requiresAuth(),transactionController.addTransaction);
router.put('/:id',requiresAuth(),transactionController.updateTransaction);
router.get('/sum/:id',requiresAuth(),transactionController.getSumOfIncomeTransactionsByUserId);
router.get('/sum/:id',requiresAuth(),transactionController.getSumOfExpenseTransactionsByUserId);
router.delete('/:id',requiresAuth(),transactionController.deleteTransactions);

module.exports = router;