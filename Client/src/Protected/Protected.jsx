import React, { useContext, useEffect } from 'react';
import { Authcontext } from '../Context/AuthContext'; // Corrected import statement
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const { auth } = useContext(Authcontext); // Corrected context name
    const navigate = useNavigate()
    const{Component} = props
    console.log(auth);
    const check = auth?.user?.role === 1
    useEffect(()=>{
        if(!check)navigate("/")
    },[])

    return (
        <>
            <Component />
        </>
    );
};

export default Protected;
