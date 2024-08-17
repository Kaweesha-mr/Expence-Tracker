'use client'
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const useSignin = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast();

    const signin = async ({ email, password }: { email: string, password: string }) => {
        setIsLoading(true);  // Start the loading state

        try {
            const response = await fetch('http://13.60.57.64:3002/Auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                redirect: 'follow',
            });

            const responseBody = await response.json();


            if (!response.ok) {
                toast({
                    variant: "destructive",
                    title: responseBody.error,
                    duration: 2000
                });
            } else {
                console.log(response);
                localStorage.setItem('token', responseBody.token);
                localStorage.setItem('user', JSON.stringify(responseBody.user));

                toast({
                    className: "bg-green-500",
                    variant: "default",
                    duration: 2000,
                    title: `Login Success`,
                });

                window.location.href = "/";
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: `An error occurred`,
                duration: 2000,
                description: "Please try again later",
            });
        } finally {
            setIsLoading(false);  // End the loading state
        }
    };

    return { signin, isLoading };
};
