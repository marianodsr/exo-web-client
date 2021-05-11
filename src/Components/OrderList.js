import React, { useState } from 'react'
import dayjs from 'dayjs'

import Order from './Order'

const data = [
    {
        state: "pending",
        customer: "Juan Perez",
        due_date: dayjs().format("DD/MM/YYYY"),
        products: [
            {   
                id: "123UUISDK@#@",
                name: "Mate nura blanco",
                quantity: 2
            },
            {
                id: "123UUISDK@#@",
                name: "Set pampa negro",
                quantity: 3

            },
            {
                id: "123UUISDK@#@",
                name: "Mate acero inoxidable negro",
                quantity: 1

            }
        ]
    },
    {
        state: "fulfilled",
        customer: "Roberto Remulus",
        due_date: dayjs().format("DD/MM/YYYY"),
        products: [
            {   
                id: "123UUISDK@#@",
                name: "Mate nura blanco",
                quantity: 2
            },
            {
                id: "123UUISDK@#@",
                name: "Set pampa negro",
                quantity: 3

            },
            {
                id: "123UUISDK@#@",
                name: "Mate acero inoxidable negro",
                quantity: 1

            }
        ]
    },
    {
        state: "cancelled",
        customer: "Jessica Jones",
        due_date: dayjs().format("DD/MM/YYYY"),
        products: [
            {   
                id: "123UUISDK@#@",
                name: "Mate nura blanco",
                quantity: 2
            },
            {
                id: "123UUISDK@#@",
                name: "Set pampa negro",
                quantity: 3

            },
            {
                id: "123UUISDK@#@",
                name: "Mate acero inoxidable negro",
                quantity: 1

            }
        ]
    },
    {
        state: "pending",
        customer: "Ivern Iverno",
        due_date: dayjs().format("DD/MM/YYYY"),
        products: [
            {   
                id: "123UUISDK@#@",
                name: "Mate nura blanco",
                quantity: 2
            },
            {
                id: "123UUISDK@#@",
                name: "Set pampa negro",
                quantity: 3

            },
            {
                id: "123UUISDK@#@",
                name: "Mate acero inoxidable negro",
                quantity: 1

            }
        ]
    }
]




const OrderList = () => {

    return (
        <div className="px-2">
            <div className="flex space-x-4 bg-primary py-2 text-white font-bold text-lg text-center">
                <h3 className="w-1/4">State</h3>
                <h3 className="w-1/4">Customer</h3>
                <h3 className="w-1/4">Due date</h3>
            </div>    
                {data.map((curr, index) => <Order data={curr} key={index}/>)}
        </div>
    )
}

export default OrderList
