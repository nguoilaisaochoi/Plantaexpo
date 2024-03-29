import React, { useContext, useState, createContext } from "react";

export const Appcontext = createContext();
export const Appprovider = (props) => {
  const [islogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  return (
    <Appcontext.Provider
      value={{
        islogin,
        setIsLogin,
        user,
        setUser,
      }}
    >
      {props.children}
    </Appcontext.Provider>
  );
};
