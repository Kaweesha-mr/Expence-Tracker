import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Separator } from "./ui/separator";

export default function MainCard(){

    return <div className="flex justify-center align-middle">
    <Card className="w-full sm:w-3/4 md:1/2 rounded-2xl h-fit" >
        <CardHeader>
            <CardTitle>
                <div className="">
                    <h1 className="text-xl">Total Balance</h1>
                    <p className="text-3xl">$0.00</p>
                </div>
            </CardTitle>
            <CardDescription>
                <div className="flex flex-row justify-between">

                    <div>
                        <h2 className="text-lg">Income</h2>
                        <p className="text-2xl">$0.00</p>
                    </div>

                    <div>
                        <h2 className="text-lg">Expenses</h2>
                        <p className="text-2xl">$0.00</p>
                    </div>

                </div>
                
            </CardDescription>
        </CardHeader>

    </Card>

</div>
}