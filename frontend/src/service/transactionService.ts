import { AuthHeader } from '@/lib/authHeader';
import axios from 'axios';
import { AddTransactionFormProps } from '@/types/addFormTypes';


const transactionService = axios.create ({
    baseURL: 'http://13.60.57.64:3002/api/transactions',
    headers: AuthHeader
})


//todo: add Transaction
export const addtransaction  =  async (data:AddTransactionFormProps) => {
    try {
        const response = await transactionService.post('/', data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getLatestTransactions = async () => {
    try{
        const response = await transactionService.get('/latest');
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export const getTransactions = async () => {
    try{
        const response = await transactionService.get('/');
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export const deleteTransaction = async (id:string) => {
    try{
        const response = await transactionService.delete(`/${id}`);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export const getTransactionbyId = async (id:string) => {
    try{
        const response = await transactionService.get(`one/${id}`);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}


export const updateTransaction = async (id:string, data:AddTransactionFormProps) => {
    try{
        const response = await transactionService.put(`/${id}`, data);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export const getSumofIncome = async () => {
    try{
        const response = await transactionService.get('/sumIncome');
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export const getSumofExpenses = async () => {
    try{
        const response = await transactionService.get('/sumExpense');
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
