'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignin } from "@/hooks/useSignin";
import { useEffect, useState } from "react";
import { z } from 'zod';

const SignUpSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    rePassword: z.string().min(8, "Password must be at least 8 characters")
}).refine(data => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "Passwords do not match",
});

export default function Login() {


    const { isLoading, signin } = useSignin();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');
    const [error, setError] = useState<{ email?: string; password?: string; rePassword?: string }>({});


    useEffect(() => {
        handleValidation({ email, password, rePassword });
    }, [email, password, rePassword]);

    type SignUpData = z.infer<typeof SignUpSchema>;
    const handleValidation = ({ email, password, rePassword }: SignUpData) => {

        const result = SignUpSchema.safeParse({ email, password, rePassword });

        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setError({
                email: fieldErrors.email?.[0],
                password: fieldErrors.password?.[0],
                rePassword: fieldErrors.rePassword?.[0],
            });
        }
        else {
            setError({});
            return true;
        }


    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(handleValidation({ email, password, rePassword })){
            await signin({ email, password });
        }
        else{
            console.log('Error')
        }
        
        





    }





    return (
        <div className="justify-center items-center align-middle flex flex-row h-screen">
            <form onSubmit={handleSubmit}>
                <div className="w-[28rem] border border-slate-50 shadow-2xl m-10 rounded-lg p-4 flex flex-col gap-4 h-fit align-middle justify-center">
                    <h1 className="text-center text-4xl font-semibold">Sign Up</h1>
                    <Input title="Email" placeholder="Enter your email" type="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)

                    }} />

                    {error.email && <p className="text-red-500">{error.email}</p>}
                    <Input title="Password" placeholder="Enter your password" type="password" value={password} onChange={(e) => {

                        setPassword(e.target.value)
                    }} />

                    {error.password && <p className="text-red-500">{error.password}</p>}

                    <Input title="Re-Password" placeholder="Re-Enter your password" type="password" value={rePassword} onChange={(e) => {
                        setRePassword(e.target.value);

                    }} />

                    {error.rePassword && <p className="text-red-500">{error.rePassword}</p>}

                    <Button type="submit" disabled={isLoading}>{isLoading ? 'Loading' : 'SignIn'}</Button>

                </div>
            </form>
        </div>
    )
}
