import React, { useState } from 'react'
import ProductCard from '../Components/ProductCard'
import SearchIcon from '@material-ui/icons/Search';
import TagCarrousel from '../Components/TagCarrousel';
import {useHistory} from 'react-router'


const placeholder = [
    {
        ID: 1,
        name: 'Mate nura acero inoxidable',
        photo : 'temp/matePlaceholder'
    },
    {
        ID: 2,
        name: 'Mate nura pintado',
        photo : 'temp/matePintado'
    },
    {
        ID: 3,
        name: 'Set pampa borravino',
        photo : 'temp/setPampaPlaceholder'
    },
    {
        ID: 4,
        name: 'Mate pampa rosado',
        photo : 'temp/matePampaRosadoPlaceholder'
    }
]

const tagsPlaceholders = [
    "cocina",
    "mate",
    "hogar",
    "decoracion",
    "interiores" 
]

const Catalog = () => {
    const [tags, setTags] = useState(tagsPlaceholders)
    const history = useHistory()

    return (
        <div className="h-fullPage overflow-y-hidden">
        <h2 className="text-secondary font-bold text-5xl ml-4 mt-8">Products</h2>
        <button className="font-bold text-white bg-secondary px-12 py-2
        ml-4 rounded mt-12 text-3xl shadow cursor-pointer hover:bg-white hover:text-secondary">NEW</button>

        <div className="my-8 h-12 w-full flex justify-center rounded">
            <input className="w-3/4 opacity-60  bg-gray-100 text-center border-t border-b border-l  border-secondary
            h-full" type="text" placeholder="Search..."/>
            <button className="h-full bg-primary w-12  text-white font-bold hover:bg-brownish" ><SearchIcon fontSize="large"/></button>
        
        </div>

        <div className="mb-6">
            <TagCarrousel tagList={tags} />
        </div>



        <ul className="overflow-y-scroll h-full border flex flex-col space-y-2 pt-2">
            {placeholder.map( (product) => (<ProductCard product={product} onClick={() => history.push(`/catalog/${product.ID}`, product)}/>))}
        </ul>
        



        </div>
    )
}

export default Catalog
