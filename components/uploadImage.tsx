import React, { useEffect, useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useRecoilState } from 'recoil'
import { imageState } from '@/store/uploadImageAtom'
import { createAListingAtom } from '@/store/createAListingAtom';

const UploadImage = () => {
    const [listing, setListing] = useRecoilState(createAListingAtom);
    function onImageChange(e: any) {
        // setImages([...e.target.files]);
        setListing(listing.image([...e.target.files]));
    }
    return (
        <div>
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" multiple accept='images/*' onChange={onImageChange}/>
        </div>
    )
}

export default UploadImage