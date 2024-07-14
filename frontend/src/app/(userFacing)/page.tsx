import TransactionCard from "@/components/TransactionCard";
import MainCard from "@/components/mainCard";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";


export default function HomePage() {

    return (
        <>
            <MainCard/>

            <Separator className="mt-5"/>

            <TransactionCard />

        </>
    )
}