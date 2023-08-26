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
            <Card className="w-[350px] items-center container mt-4">
                <CardHeader>
                    <CardTitle>Create a listing</CardTitle>
                    <CardDescription>add your new listing in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
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
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" type='tel' placeholder="Location of your listing" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="phone">Contact no.</Label>
                                <Input id="phone" placeholder="Contact number" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                {listingDetails.type == "sell" ? (
                                    <>
                                        <Label htmlFor="price">Price/sq. feet</Label>
                                        <Input id="price" placeholder="Price of your listing" />
                                    </>
                                ) : (
                                    <>
                                        <Label htmlFor="price">Price per week</Label>
                                        <Input id="price" placeholder="Price of your listing" />
                                    </>
                                )}
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