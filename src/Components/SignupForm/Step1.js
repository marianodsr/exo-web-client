import React from 'react'
import InputWithIcon from '../InputWithIcon'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';



const Step1 = ({formik}) => {

    return (
        <div className="flex flex-col items-center h-64 mt-16 px-6 max-w-lg w-full">
           <InputWithIcon label="First Name" name="firstName" type="text" Icon={PersonIcon} onChange={formik.handleChange} value={formik.values.firstName} /> 
           {formik.errors.firstName && <p className="pl-8 text-red-600 font-bold text-sm self-end">{formik.errors.firstName}</p>}
           <InputWithIcon label="Last Name" name="lastName" type="text" Icon={PersonIcon} onChange={formik.handleChange} value={formik.values.lastName} /> 
           {formik.errors.lastName && <p className="pl-8 text-red-600 font-bold text-sm self-end">{formik.errors.lastName}</p>}
           <InputWithIcon label="Email" name="email" type="email" Icon={EmailIcon} onChange={formik.handleChange} value={formik.values.email} /> 
           {formik.errors.email && <p className="pl-8 text-red-600 font-bold text-sm self-end">{formik.errors.email}</p>}
           <InputWithIcon label="Password" name="password" type="password" Icon={VpnKeyIcon} onChange={formik.handleChange} value={formik.values.password} /> 
           {formik.errors.password && <p className="pl-8 text-red-600 font-bold text-sm self-end">{formik.errors.password}</p>}
        </div>
    )
}

export default Step1
