import React from 'react'
import { Redirect, Route } from 'react-router'
import { useAuth } from '../Contexts/AuthContext'
import Navbar from '../Components/Navbar'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { userCredentials } = useAuth()
    return userCredentials.data ? (
      <>
      <Navbar />
      <Route {...rest} component={Component} />
      </>
    ) : <Redirect to={"/login"} />
}

export default ProtectedRoute
