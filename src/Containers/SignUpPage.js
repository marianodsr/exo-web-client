import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup'
import { useHistory } from 'react-router'
import SignupForm from "../Components/SignupForm/SignUpForm";
import { useAuth } from '../Contexts/AuthContext'

const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const { signup, login } = useAuth()
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      company: ""
    },
    validationSchema: yup.object({
      firstName: yup.string().required("Field required."),
      lastName: yup.string().required("Field required."),
      email: yup.string().email("Invalid email format").required("Field required."),
      password: yup.string().required("Field required."),
      company: yup.string().required("Field required.")
    }),
    onSubmit: async(values) => {
      console.log('submitting!')
      const resp = await signup(values.firstName, values.lastName, values.email, values.password, values.company)
      if (!resp) return
      setError(resp.error)
      if(resp.success) {
        await login(values.email, values.password)
        history.push('/firstVisit')
      }
    }
  })

  const handleNextClick = () => {
    setStep((prev) => prev + 1);
  };

  const handlePreviousClick = () => {
      setStep(prev => prev -1)
  }
  

  const renderButtons = () => {
    switch (step) {
      case 1:
        return (
          <span
            className="bg-secondary mt-24 self-center cursor-pointer hover:bg-gray-600 w-4/6 rounded text-center py-4 font-bold text-lg max-w-md"
            onClick={handleNextClick}
          >
            NEXT
          </span>
        );
      case 2:
        return (
          <div className="flex flex-col w-4/6 max-w-2xl">
            <span onClick={handlePreviousClick} className="max-w-md w-full text-lg rounded text-center py-4 font-bold justify-around bg-secondary mt-8 self-center cursor-pointer hover:bg-gray-600">
              PREVIOUS
            </span>
            <span onClick={formik.handleSubmit} className=" max-w-md w-full text-lg rounded text-center py-4 font-bold justify-around bg-brownish mt-4 self-center cursor-pointer hover:bg-gray-600">
              SIGN UP
            </span>
            <p className="pl-8 text-red-600 font-bold text-lg self-center mr-8 pt-4">{error}</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <form className="bg-primary w-screen h-screen text-white pt-10 flex flex-col items-center">
      <div className="px-6 max-w-lg mr-6">
        <h2 className="text-secondary text-3xl font-bold">{step === 1 ? 'Account details' : 'Company details'}</h2>
        <h4 className="text-lg font-bold">
          {step === 1 ? 'Please complete with your personal information' : 'Please enter your company name'}
        </h4>
      </div>
      <SignupForm step={step} formik={formik} />
      {renderButtons()}
    </form>
  );
};

export default SignUpPage;
