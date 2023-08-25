"use client"

import React from 'react'
import {
    Github,
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
import Link from 'next/link'
import Logout from './logout';


const Profile = () => {
    return (
        <div className='pt-4 pr-14 pb-4'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Profile</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Github className="mr-2 h-4 w-4" />
                        <Link href={'https://github.com/chetanguptaa'} target="_blank" className='font-medium pl-4 mb-[6px] mt-[7px]'>Github</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <Logout />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Profile;