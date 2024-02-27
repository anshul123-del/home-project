import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";
export const Searchcontext = createContext()
const Searchprovider = ({ children }) => {
    const baseurl = "http://localhost:8050";

  const [searchi, setsearchi] = useState({
        keyword:"",
        results:[],
    
  });

    //eslint-disable-next-line

  return (
    <Searchcontext.Provider value={{searchi, setsearchi,baseurl }}>
      {children}
    </Searchcontext.Provider>
  );
};
const useSearch = ()=>useContext(Searchcontext)
export {useSearch, Searchprovider}
