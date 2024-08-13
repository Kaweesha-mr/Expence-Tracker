"use client"
import ResponsiveForm from "@/components/ResponsiveForm";
import TransactionCard from "@/components/TransactionCard";
import { getTransactions } from "@/service/transactionService";
import { Transaction } from "@/types/addFormTypes";
import { useEffect, useState } from "react";

export default function Transactions() {


    const [data, setData] = useState<Transaction[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            const response = await getTransactions();
            setLoading(false);
            setData(response);
        }
        fetchData();

    }, [])

    const handleUpdate = () => {
        //backend connection
        console.log("Update Transaction")
    }

    

    return (
        <div className="grid grid-cols-1">

            <ResponsiveForm title="Update" handleSubmit={handleUpdate}>
                {
                    data.map((transaction, index) => {
                        return (
                            <TransactionCard  key={transaction._id} Title={transaction.name} Date={transaction.createdAt} Amount={transaction.amount} />
                        )
                    })
                }
            </ResponsiveForm>

        </div>
    )
}