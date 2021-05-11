import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';



const ConfirmDiscardPair = ({onConfirm, onDiscard, confirmButtonBgColor="bg-primary", confirmButtonTextColor="text-secondary", discardButtonBgColor="bg-red-400", discardButtonTextColor="text-white"}) => {
    return (
        <div className="flex space-x-2">
            <span
                onClick={onConfirm} 
                className={`p-1 ${confirmButtonBgColor} ${confirmButtonTextColor} rounded font-bold transform hover:scale-90 cursor-pointer `}><DoneIcon /></span>
            <span
                onClick={onDiscard} 
                className={`p-1 ${discardButtonBgColor} ${discardButtonTextColor} rounded font-bold transform hover:scale-90 cursor-pointer `}><ClearIcon /></span>
        </div>
    )
}

export default ConfirmDiscardPair
