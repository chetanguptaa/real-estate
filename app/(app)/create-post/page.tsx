'use client'

import { createAListingState } from '@/store/listingStateAtom'
import React from 'react'
import { useRecoilValue } from 'recoil'
import CreateAListing from '@/components/listing/CreateAListing'

const CreatePostPage = () => {
    const listingState = useRecoilValue(createAListingState);
    return (
        <div className='p-8'>
          {listingState && <CreateAListing />}
        </div>
    )
}

export default CreatePostPage