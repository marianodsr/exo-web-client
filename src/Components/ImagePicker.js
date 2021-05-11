import React, { useRef } from 'react'
import imagePlaceholder from '../placeholders/image-placeholder.png'
import CloudImage from './CloudImage'

const ImagePicker = ({ label, image, onChange, className, ...rest }) => {
    const inputRef = useRef(null)

   return (
        <div className={`flex flex-col items-center space-y-2 ${className}`}>
            <div className="max-w-full bg-secondary cursor-pointer transform hover:scale-90" onClick={()=> inputRef.current.click()}>
                <CloudImage className="max-w-full w-full rounded" src={image} placeholder={imagePlaceholder} alt="img"/>
            </div>
            <input className="hidden" type="file" ref={inputRef} onChange={(e) => onChange(e)}/>
            <label className="font-bold  text-secondary">{label}</label>
        </div>
    )
}

export default ImagePicker
