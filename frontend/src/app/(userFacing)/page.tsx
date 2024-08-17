"use client"
import MainCard from "@/components/mainCard";
import ResponsiveForm from "@/components/ResponsiveForm";
import TransactionCard from "@/components/TransactionCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getLatestTransactions,getSumofExpenses,getSumofIncome } from "@/service/transactionService";
import { useEffect, useState } from "react";
import { Transaction } from "@/types/addFormTypes";
import { Skeleton } from "@/components/ui/skeleton";





function HomePage() {
    const [data, setData] = useState<Transaction[]>([])
    const [loading, setLoading] = useState(true);
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const [transactionsResponse, expenseResponse, incomeResponse] = await Promise.all([
                    getLatestTransactions(),
                    getSumofExpenses(),
                    getSumofIncome()
                ]);
    
                setData(transactionsResponse);
                setExpense(expenseResponse);
                setIncome(incomeResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);



    return (
        <>

            <MainCard expenses={expense} income={income} />
            <Separator className="m-5" />

            <div className="grid grid-cols-1 align-middle justify-center">
                <h1 className="text-3xl  font-semibold text-center m-2 ">Latest Transactions</h1>

                <ResponsiveForm title="New" >
                    <Button size={"sm"} className="w-full m-5 md:w-fit ">Add New Transaction</Button>
                </ResponsiveForm>

                {
                    loading &&

                    <div className="grid grid-cols-2 gap-4">
                        
                        <Skeleton className="h-[70px] w-[600px]" />
                        <Skeleton className="h-[70px] w-[600px]" />
                        <Skeleton className="h-[70px] w-[600px]" />
                        <Skeleton className="h-[70px] w-[600px]" />
                        
                    </div>
                }

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">



                    {
                        data.map((transaction) => {
                            return <TransactionCard key={transaction._id} Title={transaction.name} Date={transaction.createdAt} Amount={transaction.amount} />
                        })
                    }

                </div>

            </div>
        </>
    )
}


export default HomePage;
