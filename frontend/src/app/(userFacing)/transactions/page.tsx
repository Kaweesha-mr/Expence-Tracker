// import TransactionCard from "@/components/TransactionCard";
// import { Button } from "@/components/ui/button";
// import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
// import { Input } from "@/components/ui/input";

// export default function Transactions() {
//     return (
//         <>
//             <Drawer>

//                 <DrawerTrigger className="w-full">
//                     <TransactionCard Title={"baba"} Date={"2023/12/32"} Amount={20} />
//                 </DrawerTrigger>
//                 <DrawerContent>
//                     <DrawerHeader>
//                         <div className="text-center">
//                             <DrawerTitle>Chnage Transaction Amount</DrawerTitle>
//                             <DrawerDescription>Enter in LKR</DrawerDescription>
//                         </div>
//                     </DrawerHeader>
//                     <div className="flex flex-col justify-center items-center">
//                         <div className="w-1/4 m-4">
//                             <Input className="m-4" label="Amount" placeholder="Enter Amount" />
//                             <Input className="m-4" label="Amount" placeholder="Enter Amount" />
//                         </div>

//                         <div className="flex justify-between">
//                             <Button className="w-fit">Update</Button>
//                             <Button variant={"outline"} className="w-fit">cancel</Button>
//                         </div>




//                     </div>

//                     <DrawerFooter >

//                     </DrawerFooter>
//                 </DrawerContent>
//             </Drawer>

//         </>
//     )
// }