"use client"
import React from 'react'
import { 
    PlusSquare,
} from "lucide-react"
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Logout from './logout';
import { useRouter } from 'next/navigation';

const Profile = () => {
    const router = useRouter();
    const creatingAListing = () => {
        router.push('/create-post');
    }
    return (
        <div className='pt-4 pr-14 pb-4'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">Profile</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <PlusSquare className="mr-2 h-4 w-4" />
                        <Button onClick={creatingAListing} variant="ghost">Create a Listing</Button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <Logout />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Profile;