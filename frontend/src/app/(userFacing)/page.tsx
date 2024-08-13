"use client"
import MainCard from "@/components/mainCard";
import ResponsiveForm from "@/components/ResponsiveForm";
import TransactionCard from "@/components/TransactionCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getLatestTransactions } from "@/service/transactionService";
import { useEffect, useState } from "react";
import { Transaction } from "@/types/addFormTypes";





function HomePage() {
    const [data,setData] = useState<Transaction[]>([])


    useEffect(() => {
        const fetchData =  async () => {
            const response = await getLatestTransactions();
            setData(response);
        }
        fetchData();
        
    },[])

    






    return (
        <>

                    <MainCard totalBalance={2} expenses={2} income={1} />
                    <Separator className="m-5" />

                    <div className="grid grid-cols-1">
                        <h1 className="text-3xl  font-semibold text-center m-2 ">Latest Transactions</h1>

                        <ResponsiveForm title="New" >
                            <Button size={"sm"} className="w-full m-5 md:w-fit ">Add New Transaction</Button>
                        </ResponsiveForm>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {
                                data.map((transaction) => {
                                    return <TransactionCard key={transaction._id} Title={transaction.type} Date={transaction.createdAt} Amount={transaction.amount} />
                                })
                            }

                        </div>

                    </div>
                </>
    )
}


export default HomePage;
