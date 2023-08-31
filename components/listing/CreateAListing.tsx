'use client'
import React, {FormEvent} from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation'
import { Textarea } from '../ui/textarea'
import UploadImage from '../uploadImage'
import { useRecoilState } from 'recoil'
import { createAListingAtom } from '@/store/createAListingAtom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { supabase } from '@/lib/supabase'
import { imageState } from '@/store/uploadImageAtom'
import { useSession } from 'next-auth/react'

const CreateAListing = () => {
    const session = useSession();
    const router  = useRouter();
    if(!session) router.push('/login');
    const user = session.data?.user?.email as string;
    const [images, setImages] = useRecoilState(imageState);
    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            //convert `FileList` to `File[]`
            const _files = Array.from(e.target.files);
            setImages(_files);
        }
    };
    const [listingDetails, setListingDetails] = useRecoilState(createAListingAtom);
    const handleTypeChange = (value: string) => {
        setListingDetails((prevDetails) => ({
            ...prevDetails,
            type: value
        }));
    };
    const submitForm = async (e: FormEvent) => {
        e.preventDefault();
        const uploadedImageUrls = await uploadImagesToSupabase();
        const listingDetailsWithImages = {
            ...listingDetails,
            images: uploadedImageUrls
        };
        await axios.post("/api/create-post", listingDetailsWithImages);
    }
    const uploadImagesToSupabase = async () => {
        const imageUrls = [];
        for (const image of images) {
            const { data, error } = await supabase.storage
                .from('images')
                .upload(`images/${user}/${image.name}`, image);
            if (data) {
                const imageUrl = data.path;
                imageUrls.push(imageUrl);
            } else {
                console.error('Image upload error:', error);
            }
        }
        return imageUrls;
    };
    return (
        <Card className="items-center container mt-4 w-full m-auto bg-white lg:max-w-lg">
            <CardHeader>
                <CardTitle>Create a listing</CardTitle>
                <CardDescription>add your new listing in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <form 
                autoComplete='on' 
                id='listingForm' 
                name='listingForm' 
                onSubmit={submitForm}
                >
                    <div className="grid w-full items-center gap-4">
                        <div className='flex flex-row gap-28'>
                            <div className="flex flex-col space-y-1.5 w-[50%]">
                                <Label htmlFor="type">Type</Label>
                                <Select 
                                onValueChange={(value) => handleTypeChange(value)}
                                >
                                    <SelectTrigger id="type">
                                        <SelectValue placeholder="select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="rent">Rent</SelectItem>
                                        <SelectItem value="sell">Sell</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5 w-[50%]">
                                <Label htmlFor="location">Location</Label>
                                <Input 
                                id="location" 
                                type='tel' 
                                placeholder="Location" 
                                onChange={(e) => setListingDetails({
                                    ...listingDetails, location: e.target.value
                                })}
                                />
                            </div>
                        </div>
                        <div className='flex flex-row gap-28'>
                            <div className="flex flex-col space-y-1.5 w-[50%]">
                                <Label htmlFor="phone">Contact no.</Label>
                                <Input 
                                id="phone" 
                                placeholder="Contact number" 
                                onChange={(e) => setListingDetails({
                                    ...listingDetails, contact: e.target.value
                                })}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5 w-[50%]">
                                {listingDetails.type == "sell" ? (
                                    <>
                                        <Label htmlFor="price">Price/sq. feet</Label>
                                        <Input 
                                        id="price"
                                        placeholder="Price" 
                                        onChange={(e) => {
                                            setListingDetails({
                                                ...listingDetails,
                                                pricePerSqFeet: e.target.value
                                            })
                                        }}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Label htmlFor="price">Price per week</Label>
                                        <Input 
                                        id="price"
                                        placeholder="Price" 
                                        onChange={(e) => {
                                            setListingDetails({
                                                ...listingDetails,
                                                pricePerMonth: e.target.value
                                            })
                                        }}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div>
                            <UploadImage onChange={handleFileSelected} />
                        </div>
                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                placeholder="Description"
                                className="resize-none"
                                id='description'
                                onChange={() => {
                                    setListingDetails({
                                        ...listingDetails,
                                        description: listingDetails.description
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mt-2">
                        <Button 
                        variant="ghost" 
                        onClick={() => {
                            router.push('/posts');
                        }}>Cancel</Button>
                        <Button 
                        variant="ghost" 
                        type='submit'>add</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default CreateAListing;