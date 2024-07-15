"use client"
import ResponsiveForm from "@/components/ResponsiveForm";
import TransactionCard from "@/components/TransactionCard";

export default function Transactions() {


    const handleUpdate = () => {
        //backend connection
        console.log("Update Transaction")
    }

    return (
        <ResponsiveForm title="Update" handleSubmit={handleUpdate}>
            <TransactionCard Title="Payment" Date="12/12/2021" Amount={1000} />
        </ResponsiveForm>
    )
}