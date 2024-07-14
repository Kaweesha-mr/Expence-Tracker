const CURRENCY_FORMAT = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency:"LKR",
    minimumFractionDigits: 2

})

export function formatCurrency(amount: number){
    return CURRENCY_FORMAT.format(amount)
}