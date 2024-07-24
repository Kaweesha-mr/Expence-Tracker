"use client"
import MainCard from "@/components/mainCard";
import ResponsiveForm from "@/components/ResponsiveForm";
import TransactionCard from "@/components/TransactionCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import withAuth from "@/components/withAuth";

function HomePage() {


    
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
                    <TransactionCard key={2} Title={"baba"} Date={"2023/12/32"} Amount={20} />
                    <TransactionCard  key={3} Title={"baba"} Date={"2023/12/32"} Amount={20} />
                    <TransactionCard   key={4} Title={"baba"} Date={"2023/12/32"} Amount={20} />
                    <TransactionCard  key={5} Title={"baba"} Date={"2023/12/32"} Amount={20} />
                </div>

            </div>
        </>
    )
}


export default withAuth(HomePage);
