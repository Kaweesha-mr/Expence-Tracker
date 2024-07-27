import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";




export default function Login() {

    return (
        <div className="justify-center items-center align-middle flex flex-row h-screen">
            
            <div className="w-[28rem] border border-slate-50 shadow-2xl m-10 rounded-lg p-4 flex flex-col gap-4 h-fit align-middle justify-center">
                <h1 className="text-center text-4xl font-semibold">Sign In</h1>
                <Input title="Email" placeholder="Enter your email" type="email" />
                <Input title="Password" placeholder="Enter your password" type="password" />
                <Button>Log in</Button>
                <Separator decorative/>
                <div className="flex justify-evenly">
                    <Image src="/facebook.png" alt="facebook" width={40} height={40} />
                    <Image src="/github.png" alt="facebook" width={40} height={40} />
                </div>

            </div>
        </div>
    )
}