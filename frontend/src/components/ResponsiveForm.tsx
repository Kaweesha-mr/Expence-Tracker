"use client"
import { formatCurrency } from "@/lib/formatter"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog"
import { DialogHeader, DialogFooter } from "./ui/dialog"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "./ui/drawer"
import React, { ReactNode, useEffect, useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./ui/select"
import { addtransaction,deleteTransaction,getTransactionbyId,updateTransaction} from "@/service/transactionService"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";
import { Delete, DeleteIcon, LucideDelete, Trash } from "lucide-react"



type ResponsiveFormProps = {
    children: ReactNode;
    title: string;
    index?: string;
}

export default function ResponsiveForm({ children, title,index }: ResponsiveFormProps) {

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [date, setDate] = useState<string>();
    const [amount, setAmount] = useState<number>();
    const [type, setType] = useState<string>();
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>();
    const { toast } = useToast()
    const router = useRouter();


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


    useEffect(()=> {
        if(title !== 'New'){
            const fetchData = async () => {
                try{
                    const response = await getTransactionbyId(index);
                    setName(response.name);
                    setAmount(response.amount);
                    setType(response.type);
                    setDate(response.date);

                }
                catch(error){
                    console.log(error)
                }
            }
            fetchData();
        }
    },[])


    const handleDelete = () => {
        
        deleteTransaction(index).then(async (res) => {
            const response = await res;

            console.log(response)

            if (response) {

                toast({
                    className: "bg-red-500",
                    variant: "default",
                    title: `Transaction Deleted`,
                    duration: 2000
                });

                //wait 1s
                setTimeout(() => {
                    window.location.reload();
                }, 500)

                


            }
        })
    }


    const action = () => {

        const user: any = window.localStorage.getItem('user')

        const StringUser = JSON.parse(user);

        if (title === 'New') {

            const data = {
                userId: StringUser._id,
                name: name,
                amount: amount,
                type: type,
                date: date
            }
            console.log(data)


            try {
                addtransaction(data).then(async (res) => {
                    const response = await res;

                    console.log(response)

                    if (response) {

                        toast({
                            className: "bg-green-500",
                            variant: "default",
                            title: `Transaction Added`,
                            duration: 2000
                        });
                        window.location.reload();

                    }


                }
                )


            }
            catch (error) {
                console.log(error)

            }

        }
        else {
            
            try {
                updateTransaction(index, { name: name, amount: amount, type: type, date: date }).then(async (res) => {
                    const response = await res;

                    console.log(response)

                    if (response) {

                        toast({
                            className: "bg-green-500",
                            variant: "default",
                            title: `Transaction Updated`,
                            duration: 2000
                        });

                        window.location.reload();

                    }
                }
                )
            }
            catch (error) {
                console.log(error)
            }
        }
    }

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
                                    <Input placeholder="Enter Title" value={name} onChange={(e) => setName(e.target.value)} />
                                    <Input className="m-2" type="number" placeholder="Amount" value={amount ?? 0} onChange={(e) => setAmount(parseInt(e.target.value))} />
                                    <span className="m-2 text-sm text-slate-300">{formatCurrency(amount ?? 0)}</span>
                                    <Input type="date" className="mb-4" placeholder="Date and time" value={date} onChange={(e) => setDate(e.target.value)} />
                                    <Select onValueChange={(newValue) => setType(newValue)}>
                                        <SelectTrigger className={`w-[180px] ${type === "income" ? "text-green-600" : type === "expense" ? "text-red-600" : "text-black"}`}>
                                            <SelectValue placeholder={type == null?'Type':type} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem className="text-green-600" value="income">Income</SelectItem>
                                            <SelectItem className="text-red-600" value="expense">Expense</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {
                                        title !== 'New' && (
                                            <Trash/>
                                        )
                                    }
                                </div>
                            </div>
                            <DrawerFooter>
                                <div className="grid grid-cols-1 m-3 gap-1">
                                    <Button onClick={action}>{title === 'New' ? "Add" : "Update"}</Button>
                                    <DrawerClose >
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
                                {index}
                            </DialogHeader>
                            <div className="m-5">
                                <div className="w-full grid gap-4">
                                
                                    <Input placeholder="Enter Title" value={name} onChange={(e) => setName(e.target.value)} />
                                    <Input className="m-2 w-full" type="number" placeholder="Amount" value={amount ?? 0} onChange={(e) => setAmount(parseInt(e.target.value))} />
                                    <Input type="date" placeholder="Date and time" value={date} onChange={(e) => setDate(e.target.value)} />
                                    <Select onValueChange={(newValue) => setType(newValue)}>
                                        <SelectTrigger className={`w-[180px] ${type === "income" ? "text-green-600" : type === "expense" ? "text-red-600" : "text-black"}`}>
                                        <SelectValue placeholder={type == null?'Type':type} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem className="text-green-600" value="income">Income</SelectItem>
                                            <SelectItem className="text-red-600" value="expense">Expense</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    {
                                        title !== 'New' && (
                                            <Trash className=" text-red-600 cursor-pointer" onClick={handleDelete}/>
                                        )
                                    }
                                    
                                </div>
                            </div>
                            <DialogFooter>
                                <div className="flex m-3 gap-1">
                                    <Button variant={"outline"}>Cancel</Button>
                                    <Button onClick={action}>{title === 'New' ? "Add" : "Update"}</Button>
                                </div>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>


                )
            }
        </>

    )
}