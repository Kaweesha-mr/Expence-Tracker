'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignup } from "@/hooks/useSignup";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"

export default function Login() {

    const { Signup, isLoading } = useSignup();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await Signup({ email, password });

    }


    return (
        <div className="justify-center items-center align-middle flex flex-row h-screen">
            <form onSubmit={handleSubmit}>
                <div className="w-[28rem] border border-slate-50 shadow-2xl m-10 rounded-lg p-4 flex flex-col gap-4 h-fit align-middle justify-center">
                    <h1 className="text-center text-4xl font-semibold">Sign In</h1>

                    <Input title="Email" placeholder="Enter your email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <Input title="Password" placeholder="Enter your password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <Button type="submit" disabled={isLoading}>{isLoading ? 'Loading' : 'Login'}</Button>
                </div>
            </form>
        </div>
    )
}
