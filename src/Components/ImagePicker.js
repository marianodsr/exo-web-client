import React, { useRef } from 'react'
import imagePlaceholder from '../placeholders/image-placeholder.png'
import CloudImage from './CloudImage'

const ImagePicker = ({ label, image, width, height, onChange, ...rest }) => {
    const inputRef = useRef(null)

   return (
        <div className={`${width} ${height} ${rest} flex flex-col items-center space-y-6`}>
            <div className="w-2/4 bg-secondary cursor-pointer transform hover:scale-90" onClick={()=> inputRef.current.click()}>
                <CloudImage className="max-w-full w-full rounded" src={image} placeholder={imagePlaceholder} alt="img"/>
            </div>
            <input className="hidden" type="file" ref={inputRef} onChange={(e) => onChange(e)}/>
            <label className="font-bold text-3xl text-secondary">{label}</label>
        </div>
    )
}

export default ImagePicker
