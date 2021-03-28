import { useFormik } from 'formik'
import * as yup from 'yup'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import LoginForm from '../Components/LoginForm'
import { useAuth } from '../Contexts/AuthContext'

const LoginPage = () => {
  const [error, setError] = useState("")
  const { login, getCurrentUser } = useAuth()
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email format").required("Email is required"),
      password: yup.string().required("Password is required")
    }),
    onSubmit: async (values) => {
      const { success, error } = await login(values.email, values.password)
      if(success) {
        const user = await getCurrentUser()
        console.log(user["login-count"])
        if (user["login-count"] <= 1) {
          console.log('redirect to first visit')
          history.push("/firstVisit")
          return
        }
        history.push('/')
        return
      }
      setError(error)
    }
  })

  console.log("FROM LOGIN PAGE")

    return (
        <form onSubmit={formik.handleSubmit} className="bg-primary w-screen h-screen text-white pt-20 flex flex-col items-center">
          <div className="px-6 max-w-2xl">
            <h2 className="text-secondary text-4xl font-bold">Login</h2>
            <h4 className="text-2xl font-bold">
               Please enter your account information
            </h4>
          </div>
          <LoginForm formik={formik}/>
          <span onClick={formik.handleSubmit} className="cursor-pointer hover:bg-gray-800 self-center px-28 py-6 rounded bg-secondary font-bold text-2xl text-center ">LOGIN</span>
          {error && <p className="font-bold text-red-500 text-lg text-center mt-8">{error}</p>}
        </form>
    )
}

export default LoginPage
