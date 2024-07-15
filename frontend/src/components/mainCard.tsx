"use client"
import { formatCurrency } from "@/lib/formatter";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { useState } from "react";

type MainCardProps = {
    totalBalance: number;
    income: number;
    expenses: number;
    }

export default function MainCard({...props}: MainCardProps) {



    return <div className="flex justify-center items-center">
        <Card className="w-full sm:w-3/4 md:1/2 rounded-2xl h-fit bg-[#8eb0cd4a] shadow-lg">
            <CardHeader>
                <CardTitle>
                    <div className="text-center">
                        <h1 className=" text-md sm:text-3xl">Total Balance</h1>
                        <p className=" text-lg sm:text-2xl">{formatCurrency(props.totalBalance)}</p>
                    </div>
                </CardTitle>
                <CardDescription>
                    <div className="flex flex-row justify-between">
                        <div>
                            <h2 className="text-lg">Income</h2>
                            <p className=" text-lg md:text-2xl">{formatCurrency(props.income)}</p>
                        </div>
                        <div>
                            <h2 className="text-lg">Expenses</h2>
                            <p className=" text-lg md:text-2xl">{formatCurrency(props.expenses)}</p>
                        </div>
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    </div>
}