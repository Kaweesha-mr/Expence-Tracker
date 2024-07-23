
const API_BASE_URL = 'http://localhost:3002/api/transactions';

export const getAllTransactions = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getTransactionsbyId = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transaction/one/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const addTransactions = async (transaction) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/transaction`, transaction);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}