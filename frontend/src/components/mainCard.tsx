"use client"
import { formatCurrency } from "@/lib/formatter";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { useState } from "react";

export default function MainCard() {

    //usestate add
    const[totalBalance, setTotalBalance] = useState<number>(0.00);
    const[income, setIncome] = useState<number>(0.00);
    const[expenses, setExpenses] = useState<number>(0.00);

    return <div className="flex justify-center items-center">
        <Card className="w-full sm:w-3/4 md:1/2 rounded-2xl h-fit bg-[#8eb0cd4a] shadow-lg">
            <CardHeader>
                <CardTitle>
                    <div className="text-center">
                        <h1 className="text-3xl">Total Balance</h1>
                        <p className="text-2xl">{formatCurrency(totalBalance)}</p>
                    </div>
                </CardTitle>
                <CardDescription>
                    <div className="flex flex-row justify-between">
                        <div>
                            <h2 className="text-lg">Income</h2>
                            <p className="text-2xl">{formatCurrency(income)}</p>
                        </div>
                        <div>
                            <h2 className="text-lg">Expenses</h2>
                            <p className="text-2xl">{formatCurrency(expenses)}</p>
                        </div>
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    </div>
}