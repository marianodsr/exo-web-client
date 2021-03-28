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

    console.log(response)

}


export { updateCompany }