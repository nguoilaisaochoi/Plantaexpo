import React, {useContext, useState, createContext} from 'react';

export const Appcontext = createContext();
export const Appprovider = props => {
  const [islogin, setIsLogin] = useState(false);
  return (
    <Appcontext.Provider
      value={{
        islogin,
        setIsLogin,
      }}>
      {props.children}
    </Appcontext.Provider>
  );
};
