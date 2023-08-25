"use client"
import React from 'react'
import {
    Github,
    LogOut,
} from "lucide-react"
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const ProfilePage = () => {
    const router = useRouter();
    const logoutUser = async () => {
        try {
            await axios.get('/api/users/logout')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message);
        }
    }
    const toMyGithub = async () => {
        try {
            <Link href={'https://github.com/chetanguptaa'}>Github</Link>
        } catch (error: any) {
            console.log(error);
        }
    }
    return (
        <div className='pt-4 pr-20 flex justify-end items-start h-screen'>
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
                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <Button onClick={logoutUser} variant={'ghost'}>Log out</Button>
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default ProfilePage;