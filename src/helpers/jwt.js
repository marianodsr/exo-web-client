import jwt from "jwt-decode"

export const decodeToken = (tokenString) => {
    const token = jwt(tokenString)
    return token
}