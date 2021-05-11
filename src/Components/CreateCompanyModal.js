import React, { useState } from "react";
import BusinessIcon from "@material-ui/icons/Business";
import CancelIcon from '@material-ui/icons/Cancel';
import InputWithIcon from "./InputWithIcon";
import CompanyPlaceholder from "../placeholders/company_placeholder.png";
import ImagePicker from "./ImagePicker";
import { uploadImages } from "../api/files";
import { createCompany } from "../api/companies";

const MESSAGE_TYPE = {
  SUCCESS: "success",
  ERROR: "error"
}

const CreateCompanyModal = ({setShouldRender, user, getCurrentUser}) => {
  const [image, setImage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState({
    type: "",
    content: ""
  })

  const handleImageChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const response = await uploadImages(`users/${user.ID}/companies/logos/${new Date()}`, file)
    console.log(response)
    if (!response.ok) return
    const { url } = await response.json()
    setImage(url)
  };

  const handleSubmit = async() => {
    if (companyName === "") {
      setMessage({
        type: MESSAGE_TYPE.ERROR,
        content: "Company name cannot be empty"
      })
      return
    }
    const company = {
      name: companyName,
      logo: image,
      userID: user.ID
    }
    const response = await createCompany(company)
    if (!response.ok) {
      setMessage({
        type: MESSAGE_TYPE.ERROR,
        content: "An error has ocurred, please try again"
      })
      return
    }

    setMessage({
      type: MESSAGE_TYPE.SUCCESS,
      content: "Company created succesfully!"
    })

    getCurrentUser()
 
  }



   return (
    <div className="shadow rounded inline-flex flex-col fixed z-50 bg-white" style={{
      top: '50%',
      left: '50%',
      transform:' translate(-50%, -50%)'
    }}>
      <span className="absolute right-4 top-2 text-secondary  cursor-pointer transform hover:scale-90"
      onClick={()=> setShouldRender(false)}><CancelIcon /></span>
      <div className="px-8 py-8 flex items-center space-x-8 ">
        <ImagePicker
          image={image}
          alt="company-logo"
          placeholder={CompanyPlaceholder}
          onChange={handleImageChange}
          className="w-32 text-sm text-center"
          label="Upload logo"
        />
        <InputWithIcon
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
          Icon={BusinessIcon}
          label="Company name"
          type="text"
          name="company name"
          className="text-secondary "
        />
      </div>
      <div className="flex justify-between px-2">
        <span className={`${message.type === MESSAGE_TYPE.SUCCESS ? 'text-green-300' : 'text-red-500'} `}>{message.content}</span>
        <button className="disabled:opacity-50 disabled:cursor-default disabled:scale-100 self-end bg-primary px-4 py-1 rounded shadow mb-1 text-white font-bold cursor-pointer transform hover:scale-90"
        disabled={message.type === MESSAGE_TYPE.SUCCESS}
        onClick={handleSubmit}>Create</button>

      </div>
    </div>
  )
};

export default CreateCompanyModal;
