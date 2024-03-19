import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
export const Shoecontext = createContext();

const Shoecontextpro = ({ children }) => {
  const baseurl = "http://localhost:8050";
  const [feat, setfeature] = useState([]);
  const [product, setproduct] = useState([]);
  const getdata = async () => {
    const dataa = await axios.get(`${baseurl}/getproduct`);
    setfeature(dataa.data.data);
  };

  useEffect(() => {
    getdata();
  }, []);

   useEffect(()=>{
    const getprod = async () => {
      const dataa = await axios.get(`${baseurl}/getproduct`);
      setproduct(dataa.data.data);
    };
      getprod()
   },[])


  return <Shoecontext.Provider value={{feat,setfeature,product,setproduct}}>{children}</Shoecontext.Provider>
};

export const Shoecont = () => {  
    return useContext(Shoecontext);
  };
export default Shoecontextpro