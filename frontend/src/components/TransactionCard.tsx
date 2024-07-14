import { formatCurrency } from "@/lib/formatter";

export default function TransactionCard(){


    return (
        <div className=" h-35 flex flex-row justify-between p-4 bg-slate-50 rounded-lg shadow-md hover:shadow-sm transition-all duration-300 ">
            <div>
                <h1 className="p text-xl">Baba aunty rice</h1>
                <p className="text-slate-400">2020/12/2</p>
            </div>
            <div>
                <h1 className="text-red-700">{formatCurrency(900)}</h1>
            </div>
        </div>
    )
}