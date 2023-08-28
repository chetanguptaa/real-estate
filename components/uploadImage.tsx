import React, { ComponentPropsWithRef } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'

type Props = ComponentPropsWithRef<"input">;

const UploadImage = (props: Props) => {
    return (
        <div>
            <Label htmlFor="picture">Picture</Label>
            <Input 
                {...props}
                id="picture" 
                type="file" 
                multiple 
                accept='images/*'
            />
        </div>
    )
}

export default UploadImage