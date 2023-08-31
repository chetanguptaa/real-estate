import React from 'react'
import Image from 'next/image'

const Post = (props) => {
    return (
        <div>
            props.images.map((image) => {
              <Image src={image} alt={props} />
            })
        </div>
    )
}

export default Post