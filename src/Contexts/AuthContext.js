import React, { createContext, useState, useContext, useEffect } from "react";
import { Redirect } from 'react-router'
import { AUTHENTICATION_PATH } from "../config/paths";
import { getUserByID } from "../api/users";
import { decodeToken } from "../helpers/jwt";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState({
    loaded: false,
    data: null,
  });
  const [user, setUser] = useState(null)
  const [currentCompany, setCurrentCompany] = useState(null)
  const [shouldCheckForUser, setShouldCheckForUser] = useState(false);

  useEffect(() => {
    checkForUser();
  }, [shouldCheckForUser]);

  useEffect(()=> {
    if(!user) {
      setUserCredentials(prev => ({...prev, loaded: true}))
      return <Redirect to="/login" />
    }
    const current = user.companies.find(company => company.ID === user.current_company)
    console.log(current)
    setCurrentCompany(current)
  }, [user])

  const checkForUser = async () => {
    const token = localStorage.getItem("user");
    if (!token) return
    setUserCredentials({ loaded: true, data: token });
    const userData = await getCurrentUser()
  };

  const signup = async (name, lastName, email, password, company) => {
    const formattedRequest = {
      name: name,
      last_name: lastName,
      email: email,
      password: password,
      companies: [
        {
          name: company,
        },
      ],
    };
    try {
      const response = await fetch(`${AUTHENTICATION_PATH}/users/signup`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formattedRequest),
      });
      if (!response.ok) {
        return {
          success: false,
          error: await response.text(),
        };
      }

      return {
        success: true,
        error: "",
      };
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${AUTHENTICATION_PATH}/users/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      if (response.ok) {
        const jwt = await response.json();
        localStorage.setItem("user", jwt["access-token"]);
        setShouldCheckForUser(true);
        return {
          success: true,
          error: "",
        };
      }
      //console.log('SECOND RETURN')
      return {
        success: false,
        error: await response.text(),
      };

    } catch(e) {

    }
  };
  const logout = async () => {};

  const getCurrentUser = async() => {
    const token = localStorage.getItem("user")
    if (!token) return
    const { UserID } = decodeToken(token)
    const user = await getUserByID(UserID)
    setUser(user)
    return user
  }

  const store = {
    user,
    userCredentials,
    currentCompany,
    setShouldCheckForUser,
    login,
    logout,
    signup,
    getCurrentUser
  };

  return userCredentials.loaded ? (
    <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
  ) : (
    <h1>loading...</h1>
  );
};

export default AuthContextProvider;
