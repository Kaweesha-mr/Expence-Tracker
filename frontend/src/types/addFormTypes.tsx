export type AddTransactionFormProps = {
    userId: any;
    amount: number;
    type: string;
    date: string;
}

export type Transaction = {
    _id: string;
    userId: string;
    name: string;
    type: string;
    amount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}