"use client"
import React from 'react'
import {
    Github, 
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
import Link from 'next/link'
import Logout from './logout';
import { useSetRecoilState } from 'recoil'
import { canCreateAListingState } from '@/store/listingStateAtom'
import { useRouter } from 'next/navigation';

const Profile = () => {
    const router = useRouter();
    const setCreateAListing = useSetRecoilState(canCreateAListingState)
    const buttonOnClickListing = () => {
        setCreateAListing(true);
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
                        <Github className="mr-2 h-4 w-4" />
                        <Link href={'https://github.com/chetanguptaa'} target="_blank" className='font-medium pl-4 mb-[6px] mt-[7px]'>Github</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <PlusSquare className="mr-2 h-4 w-4" />
                        <Button onClick={buttonOnClickListing} variant="ghost">Create a listing</Button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <Logout />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Profile;