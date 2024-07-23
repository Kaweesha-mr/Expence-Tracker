"use client"
import { formatCurrency } from "@/lib/formatter"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog"
import { DialogHeader, DialogFooter } from "./ui/dialog"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "./ui/drawer"
import React, { ReactNode, useEffect, useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./ui/select"




type ResponsiveFormProps = {
    children: ReactNode;
    handleSubmit: () => void;
    title: string;
}

export default function ResponsiveForm({ children, handleSubmit, title }: ResponsiveFormProps) {

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [date, setDate] = useState<string>();
    const [amount, setAmount] = useState<number>();
    const [type, setType] = useState<string>();


    useEffect(() => {
        // Function to update isMobile based on window width
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }

        // Initial update
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean-up function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                                    <Input type="number" placeholder="Amount" value={amount ?? 0} onChange={(e) => setAmount(parseInt(e.target.value))} />
                                    <span className="m-2 text-sm text-slate-300">{formatCurrency(amount ?? 0)}</span>
                                    <Input type="date" className="mb-4" placeholder="Date and time" value={date} onChange={(e) => setDate(e.target.value)} />
                                    <Select onValueChange={(newValue) => setType(newValue)}>
                                        <SelectTrigger className={`w-[180px] ${type === "income" ? "text-green-600" : type === "expense" ? "text-red-600" : "text-black"}`}>
                                            <SelectValue placeholder="Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem className="text-green-600" value="income">Income</SelectItem>
                                            <SelectItem className="text-red-600" value="expense">Expense</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <DrawerFooter>
                                <div className="grid grid-cols-1 m-3 gap-1">
                                    <Button onClick={handleSubmit}>{title === 'New' ? "Add" : "Update"}</Button>
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
                                    <Input type="number" placeholder="Amount" value={amount ?? 0} onChange={(e) => setAmount(parseInt(e.target.value))} />
                                    <Input type="date" placeholder="Date and time" value={date} onChange={(e) => setDate(e.target.value)} />
                                    <Select onValueChange={(newValue) => setType(newValue)}>
                                        <SelectTrigger className={`w-[180px] ${type === "income" ? "text-green-600" : type === "expense" ? "text-red-600" : "text-black"}`}>
                                            <SelectValue placeholder="Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem className="text-green-600" value="income">Income</SelectItem>
                                            <SelectItem className="text-red-600" value="expense">Expense</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <DialogFooter>
                                <div className="flex m-3 gap-1">
                                    <Button variant={"outline"}>Cancel</Button>
                                    <Button onClick={handleSubmit}>{title === 'New' ? "Add" : "Update"}</Button>
                                </div>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>


                )
            }
        </>

    )
}