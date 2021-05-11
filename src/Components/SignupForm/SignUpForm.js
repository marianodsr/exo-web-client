import React from 'react'
import Step1 from './Step1';
import Step2 from './Step2';

const SignUpForm = ({step, formik}) => {

    const renderStep = () => {
        switch(step) {
            case 1: return <Step1 formik={formik} />
            case 2: return <Step2 formik={formik} />
            default: return null
        }
    }


    return (
        <>
        {renderStep()}
        </>
    )
}

export default SignUpForm
