import React, { useState } from "react";
import { useHistory } from "react-router";
import CompanyPlaceholder from "../placeholders/company_placeholder.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuth } from "../Contexts/AuthContext";
import CloudImage from "./CloudImage";
import CreateCompanyModal from "../Components/CreateCompanyModal";
import { updateUser } from "../api/users";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const { user, currentCompany, getCurrentUser, logout } = useAuth();
  const history = useHistory();
  const [shouldRender, setShouldRender] = useState(false);
  const [shouldRenderCompaniesDropdown, setShouldRenderDropdown] = useState(
    false
  );
  const [
    shouldRenderSettingsDropdown,
    setShouldRenderSettingsDropdown,
  ] = useState(false);
  const [shouldRenderCreateModal, setShouldRenderCreateModal] = useState(false);

  const redirectTo = (path) => {
    history.push(path);
    setShouldRender((curr) => !curr);
  };

  const handleCompanyChange = async (companyID) => {
    const response = await updateUser(user.ID, {
      ...user,
      current_company: companyID,
    });
    if (response.ok) {
      getCurrentUser();
    }
  };

  const renderCompaniesDropdown = () => {
    if (!user?.companies) return;
    const companies = user.companies.filter(
      (current) => current?.ID !== currentCompany?.ID
    );
    return (
      <ul
        className={`flex flex-col ${
          shouldRenderCompaniesDropdown ? "" : "hidden"
        } ml-8 px-2 origin-top-right absolute  left-0 top-14 bg-primary text-white font-bold shadow`}
      >
        {companies.map((current) => (
          <li
            className="py-1 flex items-center text-white font-bold space-x-4 transform hover:scale-90 cursor-pointer hover:text-secondary"
            onClick={() => handleCompanyChange(current.ID)}
          >
            <CloudImage
              className="w-8"
              src={current?.logo}
              placeholder={CompanyPlaceholder}
              alt="company-logo"
            />
            <h3>{current?.name.toUpperCase()}</h3>
          </li>
        ))}
        <small
          className="text-center text-secondary transform underline hover:scale-90 py-1 rounded text-sm cursor-pointer hover:text-white"
          onClick={() => setShouldRenderCreateModal(true)}
        >
          Add a new company
        </small>
      </ul>
    );
  };

  const renderSettingsDropdown = () => {
    return (
      <ul
        className={`flex flex-col ${
          shouldRenderSettingsDropdown ? "" : "hidden"
        } ml-8 px-2 origin-top-right absolute  right-0 mr-24 top-14 bg-primary text-white font-bold shadow`}
      >
        <li
          className="py-1 flex items-center text-white font-bold space-x-4 transform hover:scale-90 cursor-pointer hover:text-secondary"
          onClick={() => logout()}
        >
          <span>
            <ExitToAppIcon />
          </span>
          <span>Logout</span>
        </li>
      </ul>
    );
  };
  return (
    <>
      <nav className=" hidden h-14 bg-primary md:flex items-center  justify-between px-8">
        <div className="flex flex-col">
          <div className="flex items-center text-white font-bold space-x-4 ">
            <div
              className="flex space-x-4 items-center transform hover:scale-90 cursor-pointer hover:text-secondary"
              onClick={() => redirectTo("/")}
            >
              <CloudImage
                className="w-12"
                src={currentCompany?.logo}
                placeholder={CompanyPlaceholder}
                alt="company-logo"
              />
              <h3>{currentCompany?.name.toUpperCase()}</h3>
            </div>
            <div
              className={`${
                !user?.companies && "hidden"
              } border rounded border-white hover:text-secondary hover:bg-white cursor-pointer transform hover:scale-90`}
              onClick={() =>
                setShouldRenderDropdown(!shouldRenderCompaniesDropdown)
              }
            >
              <ArrowDropDownIcon />
            </div>
          </div>
          {renderSettingsDropdown()}
          {renderCompaniesDropdown()}
        </div>
        <ul className="mr-20 h-full flex items-center font-bold text-white text-md space-x-20">
          <li
            className="cursor-pointer transform hover:scale-90 hover:text-secondary"
            onClick={() => history.push("/catalog")}
          >
            PRODUCTS
          </li>
          <li
            className="cursor-pointer transform hover:scale-90 hover:text-secondary"
            onClick={() => history.push("/orders")}
          >
            ORDERS
          </li>
          <li className="cursor-pointer transform hover:scale-90 hover:text-secondary">
            SALES
          </li>
          <li
            className="cursor-pointer transform hover:scale-90 hover:text-secondary"
            onClick={() =>
              setShouldRenderSettingsDropdown(!shouldRenderSettingsDropdown)
            }
          >
            <SettingsIcon />
          </li>
        </ul>
      </nav>

      {shouldRenderCreateModal && (
        <CreateCompanyModal
          setShouldRender={setShouldRenderCreateModal}
          user={user}
          getCurrentUser={getCurrentUser}
        />
      )}

      <MobileNavbar
        currentCompany={currentCompany}
        shouldRender={shouldRender}
        setShouldRender={setShouldRender}
      />
    </>
  );
};

export default Navbar;
