import React, { useEffect, useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { authenticatedRequest } from  '../helpers/AuthenticatedRequest'

const DashboardPage = () => {
    const { user } = useAuth()
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async() => {
            const response = await authenticatedRequest('http://localhost:8080/users/protected')        
            setData(await response.text())
        }
        fetchData()
        console.log(user)

    }, [])


    return (
        <div className="p-4">
            {data && <h1>{data}</h1>}
        </div>
    )
}

export default DashboardPage
