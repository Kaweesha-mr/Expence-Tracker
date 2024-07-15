import { formatCurrency } from "@/lib/formatter";
import { title } from "process";

type TransactionCardProps = {
    Title: string;
    Date: string;
    Amount: number;
} & {
    className?: string;
}

export default function TransactionCard({Title, Date, Amount,...props}: TransactionCardProps) {
    return (
        <div className={`h-35 flex flex-row justify-between p-4 bg-slate-50 rounded-lg shadow-md hover:shadow-sm transition-all duration-300 `}>
            <div>
                <h1 className="p text-xl">{Title}</h1>
                <p className="text-slate-400">{Date}</p>
            </div>
            <div>
                <h1 className="text-red-700">{formatCurrency(Amount)}</h1>
            </div>
        </div>
    )
}