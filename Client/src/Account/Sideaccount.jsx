import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "./Account.css"
import { Authcontext } from '../Context/AuthContext';

const Sideaccount = () => {
    const { auth, setauth } = useContext(Authcontext);

    const handleclick = () => {
        setauth({
            ...auth,
            user: null,
        });
        localStorage.removeItem("auth");
    };
    return (
        <>
            <div className='mt-5'>
                <div className='box-div-color'>
                    <NavLink to='dashboard' className="nav-color">
                        Dashboard
                    </NavLink>
                </div>
                <div className='box-div-color'>
                    <NavLink to='order' className="nav-color">
                        Orders
                    </NavLink>
                </div>
                <div className='box-div-color'>
                    <NavLink to='downloads' className="nav-color">
                        Downloads
                    </NavLink>
                </div>
                <div className='box-div-color'>
                    <NavLink to='payment' className="nav-color">
                        Payment Method
                    </NavLink>
                </div>
                <div className='box-div-color'>
                    <NavLink to='address' className="nav-color">
                        Address
                    </NavLink>
                </div>
                <div className='box-div-color'>
                    <NavLink to='accountdetails' className="nav-color">
                        Account details
                    </NavLink>
                </div>
                <div className='box-div-color'>
                    <NavLink to='/login' className="nav-color" onClick={handleclick}>
                        Logout
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default Sideaccount