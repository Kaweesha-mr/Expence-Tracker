"use client"
import TransactionCard from "@/components/TransactionCard";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/formatter";
import { table } from "console";
import { useEffect, useState } from "react";

export default function Transactions() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [date, setDate] = useState<Date>();
    const [amount, setAmount] = useState<number>();

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    }

    const handleUpdate = () => {
        //backend connection
        console.log("Update Transaction")
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return (
        <>

            {
                isMobile ? (
                    <Drawer>
                        <DrawerTrigger className="w-full">
                            <TransactionCard Title="Payment" Date="12/12/2021" Amount={1000} />
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Update Transaction</DrawerTitle>
                                <DrawerDescription>Enter Amount in LKR</DrawerDescription>
                            </DrawerHeader>
                            <div className="m-5">

                                <div className="w-full">
                                    <Input type="number" placeholder="Amount" value={amount} onChange={(e) => { setAmount(parseInt(e.target.value)) }} />
                                    {<span className="m-2 text-sm text-slate-300">{formatCurrency(amount)}</span>}
                                    <Input type="date" placeholder="Date and time" value={date} />
                                </div>
                            </div>
                            <DrawerFooter>
                                <div className="grid grid-cols-1 m-3 gap-1">
                                    <Button onClick={handleUpdate}>Update</Button>
                                    <DrawerClose asChild>
                                        <Button variant={"outline"}>Cancel</Button>
                                    </DrawerClose>

                                </div>
                            </DrawerFooter>
                        </DrawerContent>

                    </Drawer>

                ) : (

                    <TransactionCard Title="Payment" Date="12/12/2021" Amount={1000} />

                )
            }





        </>
    )
}