import React from 'react'
import InputWithIcon from '../InputWithIcon'
import BusinessIcon from '@material-ui/icons/Business';

const Step2 = ({formik}) => {

    return (
        <div className="w-full flex flex-col items-center h-48 mt-16 px-6 justify-center max-w-lg">
                   <InputWithIcon label="Company name" name="company" type="text" Icon={BusinessIcon} labelStyle="text-2xl mb-2" onChange={formik.handleChange} value={formik.values.company} /> 

     </div>
    )
}

export default Step2
