import React, { useState, useEffect} from 'react'
import { getSignedURL } from '../api/files'

const CloudImage = ({src, alt, className, placeholder, ...rest}) => {
    const [image, setImage] = useState("")
    

    console.log(src)

    useEffect( ()=> {
        const fetchFile = async () => {
            const path = await getSignedURL(src)
            setImage(path)
        }
        fetchFile()
    })

    return (
        <img  src={image ? image : placeholder} alt={alt} className={className} {...rest} />
    )
}

export default CloudImage
