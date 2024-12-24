import { useContext } from "react"
import { AuthContext } from "../context/User/userContext"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const { token } = useContext(AuthContext)

    return token ? children : <Navigate to="/login" />
}