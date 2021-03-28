import { AUTHENTICATION_PATH } from "../config/paths"


export const authenticatedRequest = async(url, config = {}) => {
        const response = await fetch(url, {
            ...config,
            headers: {
                "Authentication": localStorage.getItem("user") ?? "",
                ...config.headers
            },
        })

        if(response.status === 401) {
            //it means token is either expired or invalid, so we try to refresh
            const response = await fetch(`${AUTHENTICATION_PATH}/users/refresh`, {
                credentials: 'include'
            })
            if (response.ok) {
                const jwt = await response.json()
                localStorage.setItem("user", jwt["access-token"])
                return await authenticatedRequest(url, config)
            }
            //refresh failed, so access token is cleared for login redirect
            localStorage.removeItem("user")  
            window.location.replace(`${window.location.origin}/login`)  
        } 

        return response

}

