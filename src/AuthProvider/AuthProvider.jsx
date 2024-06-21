/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../CustomHooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (name, email, password, username) => {
    const userInfo = {
      username,
      name,
      email,
      password,
    };
    setLoading(false);

    // console.log(userInfo);
    return axiosPublic.post("/register_user", userInfo);
  };

  const signIn = (username, password) => {
    const userInfo = {
      username,
      password,
    };
    setLoading(false);

    return axiosPublic.post("/login", userInfo);
  };

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const authInfo = {
    user,
    createUser,
    setUser,
    signIn,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
