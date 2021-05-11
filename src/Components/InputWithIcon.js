import React from 'react'

const InputWithIcon = ({Icon, type, label= "", inputStyle= "", labelStyle="", name="", onChange, value, className="",  ...rest}) => {
    return (
        <div className={`flex space-x-2 items-end mb-4 w-full ${className}`} {...rest}>
            <Icon className="text-secondary" />
            <div className="w-full">
            <h4 className={`font-bold ${labelStyle}`}>{label}</h4>
            <input onChange={onChange} type={type} name={name} className= {`bg-transparent outline-none border-b border-secondary w-full ${inputStyle}`} value={value} />
            </div>
        </div>
    )
}

export default InputWithIcon
