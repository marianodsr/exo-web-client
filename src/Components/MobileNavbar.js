import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CompanyPlaceholder from "../placeholders/company_placeholder.png";
import CloudImage from "./CloudImage";
import { useHistory } from "react-router";

const MobileNavbar = ({ currentCompany, setShouldRender, shouldRender }) => {
  const history = useHistory();

  const redirectTo = (path) => {
    history.push(path);
    setShouldRender((curr) => !curr);
  };

  return (
    <>
      <div className="w-full md:hidden h-16 bg-primary flex flex-row-reverse items-center text-secondary px-8">
        <DehazeIcon
          fontSize="large"
          onClick={() => setShouldRender((prev) => !prev)}
        />
      </div>
      <nav
        className={`${
          !shouldRender && "hidden"
        } px-16 h-full w-full bg-primary flex flex-col space-y-28 items-center  justify-between px-8 md:hidden`}
      >
        <div
          className="w-36 flex flex-col space-y-4 items-center text-4xl text-white font-bold space-x-4 transform hover:scale-90 cursor-pointer hover:text-secondary"
          onClick={() => redirectTo("/")}
        >
          <CloudImage
            className=""
            src={
              currentCompany?.logo ? currentCompany.logo : CompanyPlaceholder
            }
            alt="company-logo"
          />
          <h3>{currentCompany?.name.toUpperCase()}</h3>
        </div>
        <ul className=" h-full text-xl w-full flex flex-col space-y-20 items-center font-bold text-white text-md">
          <li
            className="cursor-pointer transform hover:scale-90 hover:text-secondary"
            onClick={() => redirectTo("/catalog")}
          >
            PRODUCTS
          </li>
          <li
            className="cursor-pointer transform hover:scale-90 hover:text-secondary"
            onClick={() => redirectTo("/orders")}
          >
            ORDERS
          </li>
          <li className="cursor-pointer transform hover:scale-90 hover:text-secondary">
            SALES
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
