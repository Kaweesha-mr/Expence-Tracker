import { useState } from "react";

export const useSignup = () => {

    const [error,setError] = useState<boolean>(false)
    const [isLoading,setIsLoading] = useState(false)


    const Signup = async ({email,password}:{email:string,password:string}) => {
        const response = 



    }
}