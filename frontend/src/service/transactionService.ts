import { AuthHeader } from '@/lib/authHeader';
import axios from 'axios';
import { AddTransactionFormProps } from '@/types/addFormTypes';


const transactionService = axios.create ({
    baseURL: 'http://localhost:3002/api/transactions',
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