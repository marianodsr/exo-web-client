import React from 'react'
import CloudImage from './CloudImage'

const ProductCard = ({ product, onClick }) => {
    return (
        <div className="flex justify-between px-4 py-2 shadow mb-2 items-center cursor-pointer transform hover:scale-90 h-20"
            onClick={onClick}>
            <CloudImage
            className="w-16 rounded-full" 
            src={product.photo} alt="product " />
            <h3 className=" w-2/4 font-bold text-secondary text-lg">{product.name}</h3>
            <small className="text-green-500">{`$${Math.trunc(Math.random() * 1000)}`}</small>
        </div>
    )
}

export default ProductCard
