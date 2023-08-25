"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "react-hot-toast"

const Logout = () => {
    const router = useRouter();
    const logoutUser = async () => {
        try {
            await axios.get('/api/logout')
            toast.success('Logged out successfully');
            router.push('/login')
        } catch (error: any) {
            toast.success('an error occured please try again!');
            console.log(error.message);
        }
    }
    return (
        <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <Button onClick={logoutUser} variant={'ghost'}>Log out</Button>
        </DropdownMenuItem>
    )
}

export default Logout;