import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

const CreateAListing = () => {
    const router  = useRouter();
    const [listingDetails, setListingDetails] = React.useState({
        type: "rent",
        location: "",
        price: 0
    })
    const handleTypeChange = (value: string) => {
        setListingDetails((prevDetails) => ({
            ...prevDetails,
            type: value
        }));
    };
    return (
            <Card className="items-center container mt-4 w-full m-auto bg-white lg:max-w-lg">
                <CardHeader>
                    <CardTitle>Create a listing</CardTitle>
                    <CardDescription>add your new listing in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className='flex flex-row gap-28'>
                                <div className="flex flex-col space-y-1.5 w-[50%]">
                                    <Label htmlFor="type">Type</Label>
                                    <Select onValueChange={(value) => handleTypeChange(value)}>
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
                                    <Input id="location" type='tel' placeholder="Location" />
                                </div>
                            </div>
                            <div className='flex flex-row gap-28'>
                                <div className="flex flex-col space-y-1.5 w-[50%]">
                                    <Label htmlFor="phone">Contact no.</Label>
                                    <Input id="phone" placeholder="Contact number" />
                                </div>
                                <div className="flex flex-col space-y-1.5 w-[50%]">
                                    {listingDetails.type == "sell" ? (
                                        <Label htmlFor="price">Price/sq. feet</Label>
                                    ) : (
                                        <Label htmlFor="price">Price per week</Label>
                                    )}
                                    <Input id="price" placeholder="Price" />
                                </div>
                            </div>
                            <UploadImage />
                            <div>
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    placeholder="Description"
                                    className="resize-none"
                                    id='description'
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="ghost" onClick={() => {
                        router.push('/posts');
                    }}>Cancel</Button>
                    <Button variant="ghost">add</Button>
                </CardFooter>
            </Card>
    )
}

export default CreateAListing




/***
 * 
import React, { useState, useEffect } from "react";

const UploadAndDisplayImage = () => {
  const [images, setImages] = useState([] as any);
  const [imageURLS, setImageURLs] = useState([]);
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: any = [];
    images.forEach((image:any) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e: any) {
    setImages([...e.target.files]);
  }

  return (
    <>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
      {imageURLS.map((imageSrc) => (
        <img src={imageSrc} alt="not fount" width={"250px"} />
      ))}
    </>
  );
};

export default UploadAndDisplayImage;
 */