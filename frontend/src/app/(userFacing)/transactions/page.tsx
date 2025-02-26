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


            {
                data.map((transaction, index) => {
                    return (
                        <ResponsiveForm key={index} index={transaction._id} title="Update">
                            <TransactionCard  Title={transaction.name} Date={transaction.createdAt} Amount={transaction.amount} />
                        </ResponsiveForm>
                    )
                })
            }


        </div>
    )
}