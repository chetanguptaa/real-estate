import React, { FormEvent } from 'react'
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
import { DropdownMenuItem } from '../ui/dropdown-menu'

const CreateAListing = () => {
    const [listingDetails, setListingDetails] = React.useState({
        type: "rent",
        location: "",
        price: 0
    })
    return (
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create a listing</CardTitle>
                    <CardDescription>add your new listing in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Type</Label>
                                <Select>
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
                                <Input id="location" placeholder="Location of your listing" />
                            </div>
                            {listingDetails.type = "Sell"} : 
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="price">Price/sq. feet</Label>
                                <Input id="price" placeholder="Price of your listing" />
                            </div> 
                            ? 
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="price">Price per week</Label>
                                <Input id="price" placeholder="Price of your listing" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>add</Button>
                </CardFooter>
            </Card>
    )
}

export default CreateAListing