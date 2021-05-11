import React from 'react'
import EditIcon from '@material-ui/icons/Edit';


const EditButton = ({ onClick, className = ""}) => {
    return (
        <span className={className}
            onClick={onClick}>
            <EditIcon />     
        </span>
    )
}

export default EditButton

