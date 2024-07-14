import TransactionCard from "@/components/TransactionCard";
import MainCard from "@/components/mainCard";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";


export default function HomePage() {

    return (
        <>
            <MainCard />

            <Separator className="m-5" />

            <div className="flex flex-col">

                <h1 className="text-3xl  font-semibold text-center m-2 ">Latest Transactions</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />

                </div>

            </div>

        </>
    )
}