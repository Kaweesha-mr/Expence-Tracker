"use client"
import ResponsiveForm from "@/components/ResponsiveForm";
import TransactionCard from "@/components/TransactionCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogDescription, DialogContent, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/formatter";
import { useEffect, useState } from "react";

export default function Transactions() {


    const handleUpdate = () => {
        //backend connection
        console.log("Update Transaction")
    }

    return (
        <ResponsiveForm handleSubmit={handleUpdate}>
            <TransactionCard Title="Payment" Date="12/12/2021" Amount={1000} />
        </ResponsiveForm>
    )
}