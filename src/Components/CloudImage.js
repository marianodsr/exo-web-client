import React, { useState, useEffect} from 'react'
import { getSignedURL } from '../api/files'

const CloudImage = ({src, alt, placeholder, className="", ...rest}) => {
    const [image, setImage] = useState("")
    
    console.log(image)

    useEffect( ()=> {
        const fetchFile = async () => {
            const path = await getSignedURL(src)
            console.log(`image fetched ${path}`)
            setImage(path)
        }
        fetchFile()
    }, [src])

    return (
        <img  src={image ? image: placeholder} alt={alt} className={className} {...rest} />
    )
}

export default CloudImage
