'use client'
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"


export const useSignup = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast()

    const Signup = async ({ email, password }: { email: string, password: string }) => {
        setIsLoading(true);  // Start the loading state


        const respose = await fetch('http://13.60.57.64:3002/Auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            redirect: 'follow',
        });

        const responseBody = await respose.json();


        if (!respose.ok) {
            toast({
                variant: "destructive",
                title: `Invalid email or password`,
                duration: 2000,
                description: "Please Check your email and password",
            });
            setIsLoading(false);
        } else {

            console.log(respose);
            localStorage.setItem('token', responseBody.token);
            localStorage.setItem('user', JSON.stringify(responseBody.user));

            toast({
                className: "bg-green-500",
                variant: "default",
                duration: 2000,
                title: `Login Success`
            });
            setIsLoading(false);

            window.location.href = "/";


        }


    }
    return { Signup, isLoading };
}