import { createContext } from "react";
import React, { useState, useEffect } from "react";
export const Authcontext = createContext()
const Authprovider = ({ children }) => {
  const baseurl = "http://localhost:8050";
  const [auth, setauth] = useState({
    user: null,
    
  });
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedata = JSON.parse(data);
      setauth({
        ...auth,
        user: parsedata.user,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <Authcontext.Provider value={{ auth, setauth,baseurl }}>
      {children}
    </Authcontext.Provider>
  );
};
export default Authprovider;
