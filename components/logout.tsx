"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

const Logout = () => {
    const router = useRouter();
    const logoutUser = async () => {
        try {
            await axios.get('/api/users/logout')
            router.push('/login')
        } catch (error: any) {
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