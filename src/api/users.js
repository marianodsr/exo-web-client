import { AUTHENTICATION_PATH } from "../config/paths"
import { authenticatedRequest } from "../helpers/AuthenticatedRequest"

export const getUserByID = async(userID) => {

    try{
        const response = await authenticatedRequest(`${AUTHENTICATION_PATH}/users/${userID}`, userID)
        const user = await response.json()
        return user
    } catch (error) {
        console.log(error)
    }
}