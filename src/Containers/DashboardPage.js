import React, { useEffect, useState } from 'react'
import { getCompanyByID } from '../api/companies'
import { useAuth } from '../Contexts/AuthContext'

const DashboardPage = () => {
    const { user, currentCompany } = useAuth()
    const [data, setData] = useState(null)
    useEffect(() => {
        if(!user) return
        const fetchData = async() => {
            const company = await getCompanyByID(user?.current_company)
            setData(company.name)
        }
        fetchData()
    }, [user, currentCompany])


    return (
        <div className="p-4 w-full h-full flex justify-center items-center">
            {data && <h1 className=" mb-16 text-lg text-secondary font-bold">Welcome<span className="text-primary text-4xl font-bold bg-secondary shadow rounded text-center px-2 ml-2 ">{data.toUpperCase()}</span></h1>}
        </div>
    )
}

export default DashboardPage
