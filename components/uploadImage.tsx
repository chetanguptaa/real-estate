import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'

const uploadImage = () => {
  return (
    <div>
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
    </div>
  )
}

export default uploadImage