import { FILES_PATH } from "../config/paths"
import { authenticatedRequest } from "../helpers/AuthenticatedRequest"



const uploadImages = async(path, file) => {
    const formData = new FormData()
    formData.append("image", file)
    formData.append("path", path)

    const response = await authenticatedRequest(`${FILES_PATH}`, {
        method: "POST",
        body: formData
        
    })
    
    return response
}

const getSignedURL = async(path) => {
    if (!path) return
    const response = await authenticatedRequest(`${FILES_PATH}?path=${path}`)
    if(!response || !response?.ok) return
    const { url } = await response.json()
    return url

}

export { uploadImages, getSignedURL }