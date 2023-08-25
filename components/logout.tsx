"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "react-hot-toast"
import { signOut, useSession } from "next-auth/react";

const Logout = () => {
    const router = useRouter();
    const session = useSession();
    return (
        <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <Button onClick={() => {
                signOut({
                    redirect: false,
                    callbackUrl: `/login`
                });
                session.status = 'unauthenticated';
                toast.success('Logged out successfully');
                router.push('/login');
            }} variant={'ghost'}>Log out</Button>
        </DropdownMenuItem>
    )
}

export default Logout;