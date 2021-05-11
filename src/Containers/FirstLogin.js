import React, { useState } from 'react'
import ImagePicker from '../Components/ImagePicker'
import { useAuth } from '../Contexts/AuthContext'
import { updateCompany } from '../api/companies'
import { uploadImages } from '../api/files'


const FirstLogin = () => {
    const { user, currentCompany, getCurrentUser} = useAuth()
    const [image, setImage] = useState(null)

    const handleImageChange = async (e) => {
        const file = e.target.files[0] 
        if(!file) return
        const response = await uploadImages(`users/${user.ID}/companies/logos/${new Date()}`, file)
        if (response.ok) {
            const { url } = await response.json() 
            await updateCompany(currentCompany.ID, {...currentCompany, logo: url})
            getCurrentUser()
            setImage(url)

        }
    }
    return (
        <div className="px-6  mt-16 flex flex-col items-center max-w-md  m-auto">
            <h1 className="font-bold text-4xl text-secondary self-start md:self-center">Welcome to EXO!</h1>
            <h3 className="mt-14 mb-12 text-lg text-secondary font-bold ">Please provide a logo for your company</h3>
            <ImagePicker image={image} label={currentCompany?.name.toUpperCase()} width="w-full" height="h-full" onChange={handleImageChange}/>
        </div>
    )
}

export default FirstLogin
