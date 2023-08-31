
//                              <div>
//                                  <Label htmlFor="description">Description</Label>
//                                  <Textarea
// @@ -85,14 +142,14 @@ const CreateAListing = () => {
//                                  />
//                              </div>
//                          </div>
// +                        <div className="flex justify-between mt-2">^M
// +                            <Button variant="ghost" onClick={() => {^M
// +                                router.push('/posts');^M
// +                            }}>Cancel</Button>^M
// +                            <Button variant="ghost" type='submit'>add</Button>^M
// +                        </div>^M
//                      </form>
//                  </CardContent>
// -                <CardFooter className="flex justify-between">
// -                    <Button variant="ghost" onClick={() => {
// -                        router.push('/posts');
// -                    }}>Cancel</Button>
// -                    <Button variant="ghost">add</Button>
// -                </CardFooter>
//              </Card>
//      )
//  }


//-------



// diff --git a/components/logout.tsx b/components/logout.tsx
// index bb629fe..d535b88 100644
// --- a/components/logout.tsx
// +++ b/components/logout.tsx
// @@ -11,8 +11,8 @@ import {
//  } from "next-auth/react";

//  const Logout = () => {
// -    const router = useRouter();
//      const session = useSession();
// +    const router = useRouter();^M
//      return (
//          <DropdownMenuItem>
//              <LogOut className="mr-2 h-4 w-4" />
// diff --git a/components/profile.tsx b/components/profile.tsx
// index e0972f0..ff3182c 100644
// --- a/components/profile.tsx
// +++ b/components/profile.tsx
// @@ -1,7 +1,6 @@
// -"use client"
// +'use client'^M
//  import React from 'react'
// -import {
// -    Github,
// +import { ^M
//      PlusSquare,
//  } from "lucide-react"
//  import { Button } from '@/components/ui/button'
// @@ -13,13 +12,12 @@ import {
//      DropdownMenuSeparator,
//      DropdownMenuTrigger,
//  } from "@/components/ui/dropdown-menu"
// -import Link from 'next/link'
//  import Logout from './logout';
// -import { useRouter } from 'next/navigation';
// +import { useRouter } from 'next/navigation'^M

//  const Profile = () => {
//      const router = useRouter();
// -    const buttonOnClickListing = () => {
// +    const creatingAListing = () => {^M
//          router.push('/create-post');
//      }
//      return (
// @@ -31,14 +29,9 @@ const Profile = () => {
//                  <DropdownMenuContent className="w-56">
//                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                      <DropdownMenuSeparator />
// -                    <DropdownMenuItem>
// -                        <Github className="mr-2 h-4 w-4" />
// -                        <Link href={'https://github.com/chetanguptaa'} target="_blank" className='font-medium pl-4 mb-[6px] mt-[7px]'>Github</Link>
// -                    </DropdownMenuItem>
// -                    <DropdownMenuSeparator />
//                      <DropdownMenuItem>
//                          <PlusSquare className="mr-2 h-4 w-4" />
// -                        <Button onClick={buttonOnClickListing} variant="ghost">Create a Listing</Button>
// +                        <Button onClick={creatingAListing} variant="ghost">Create a Listing</Button>^M
//                      </DropdownMenuItem>
//                      <DropdownMenuSeparator />
//                      <Logout />