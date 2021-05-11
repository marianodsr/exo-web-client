import { AUTHENTICATION_PATH } from '../config/paths'
import { authenticatedRequest } from '../helpers/AuthenticatedRequest'

const updateCompany = async(id, attrs) => {
    
    const response = await authenticatedRequest(`${AUTHENTICATION_PATH}/companies/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(attrs)
    })


}

const createCompany = async (attrs) => {
    const response = await authenticatedRequest(`${AUTHENTICATION_PATH}/companies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(attrs)
    })

    return response
}

const getCompanyByID = async (id) => {
    if (!id) return
    try {
        const response = await authenticatedRequest(`${AUTHENTICATION_PATH}/companies/${id}`)
        if (!response.ok) return
        const company  = await response.json()
        return company
    } catch (error) {
        console.log(error)
    }
}


export { updateCompany, createCompany, getCompanyByID }