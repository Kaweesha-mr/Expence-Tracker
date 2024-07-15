"use client"
import { formatCurrency } from "@/lib/formatter"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog"
import { DialogHeader, DialogFooter } from "./ui/dialog"
import { Drawer,DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "./ui/drawer"
import React, { ReactNode, useEffect, useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

type ResponsiveFormProps = {
    children: ReactNode;
    handleSubmit: () => void;
    title:string;
}

export default function ResponsiveForm({ children, handleSubmit ,title}: ResponsiveFormProps) {
    const [isMobile, setIsMobile] = useState(false);
    const [date, setDate] = useState<string>();
    const [amount, setAmount] = useState<number>();

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
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
                            {children}
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>{`${title} Transaction`}</DrawerTitle>
                                <DrawerDescription>Enter Amount in LKR</DrawerDescription>
                            </DrawerHeader>
                            <div className="m-5">

                                <div className="w-full">
                                    <Input type="number" placeholder="Amount" value={amount ?? 0} onChange={(e) => { setAmount(parseInt(e.target.value)) }} />
                                    {<span className="m-2 text-sm text-slate-300">{formatCurrency(amount ?? 0)}</span>}
                                    <Input type="date" placeholder="Date and time" value={date} />
                                </div>
                            </div>
                            <DrawerFooter>
                                <div className="grid grid-cols-1 m-3 gap-1">
                                    <Button onClick={handleSubmit}>{title === 'New' ? "Add":"Update"}</Button>
                                    <DrawerClose asChild>
                                        <Button variant={"outline"}>Cancel</Button>
                                    </DrawerClose>

                                </div>
                            </DrawerFooter>
                        </DrawerContent>

                    </Drawer>

                ) : (

                    <Dialog>
                        <DialogTrigger className="w-full">
                            {children}
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{`${title} Transaction`}</DialogTitle>
                                <DialogDescription>Enter Amount in LKR</DialogDescription>
                            </DialogHeader>
                            <div className="m-5">

                                <div className="w-full grid gap-4">
                                    <Input type="number" placeholder="Amount" value={amount} onChange={(e) => { setAmount(parseInt(e.target.value)) }} />
                                    <Input type="date" placeholder="Date and time" value={date} />
                                </div>
                            </div>

                            <DialogFooter>
                                <div className="flex m-3 gap-1">
                                    <DrawerClose asChild>
                                        <Button variant={"outline"}>Cancel</Button>
                                    </DrawerClose>
                                    <DrawerClose asChild>
                                        <Button onClick={()=>{handleSubmit}}>{title === 'New' ? "Add":"Update"}</Button>
                                    </DrawerClose>
                                </div>
                            </DialogFooter>

                        </DialogContent>

                    </Dialog>


                )
            }
        </>

    )
}