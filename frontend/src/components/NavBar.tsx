'use client'
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import { Button } from "./ui/button";


export function Nav({ children }: { children: ReactNode }) {
    return <nav className="bg-primary text-primary-foreground flex justify-center items-center px-4">
        {children}
        <Button className="text-secondary" onClick={() => signOut()}>Logout</Button>
    </nav>
}

export function NavLink(props: Omit<ComponentProps<typeof Link>,"className">){
    const pathName = usePathname();
    
    return (
        <Link
        {...props} 
        className={cn("p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
            pathName === props.href ? "bg-secondary text-secondary-foreground" : "text-primary-foreground"
        )}
        
        />
    )
}