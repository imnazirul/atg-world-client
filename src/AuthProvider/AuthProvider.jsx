/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useAxiosPublic from "../CustomHooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();

  const createUser = (name, email, password, username) => {
    const userInfo = {
      username,
      name,
      email,
      password,
    };

    // console.log(userInfo);

    return axiosPublic.post("/register_user", userInfo);
  };

  console.log("user", user);

  const authInfo = {
    user,
    createUser,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
