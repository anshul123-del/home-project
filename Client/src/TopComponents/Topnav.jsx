import React, { useContext } from "react";
import "./top.css";
import { FaPhoneAlt } from "react-icons/fa";
// import { IoMail } from "react-icons/io5";
// import { IoPersonSharp } from "react-icons/io5";
import { Authcontext } from "../Context/AuthContext";
// import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Topnav = () => {
  const { auth, setauth } = useContext(Authcontext);
  

  return (
    <div className="container-fluid topnav">
      <div className="container ">
        <div className="row top1">
          <div className="col-lg-6 col-sm-12 text-center">
            <p> World Wide Completely Free Returns and Free Shipping</p>
          </div>
          <div className="col-6 top2">
            <Link className="tpp">
              <FaPhoneAlt style={{ color: "#EB3E32" }} />
              +00 123 456 789
            </Link>
            <Link className="tpp">
              {/* <IoMail style={{color:"#EB3E32"}}/> */}
              demo@example.com
            </Link>
            {!auth.user ? (
              <>
                {" "}
                <Link className="tpp" to="/account">
                  {/* <IoPersonSharp style={{ color: "#EB3E32" }} />/ */}
                  Account
                </Link>
              </>
            ) : (
              <>
            <Link className="tpp" to={`${auth?.user?.role===1?'/admin':'/account'}`}>
                  {/* <IoPersonSharp style={{ color: "#EB3E32" }} />/ */}
                  {auth?.user?.name} </Link>
               
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
// {!auth.user ? (
//               <>
//                 {" "}
//                 <Link to="/register">Register</Link>
//                 <Link to="/login">Login</Link>
//               </>
//             ) : (
//               <>
//                 <NavDropdown title={auth?.user?.name} id="basic-nav-dropdown">
//                   <NavDropdown.Item>
//                     <Link
//                       to={`/dashboard/${
//                         auth?.user?.role === 1 ? "admin" : "user"
//                       }`}
//                     >
//                       Dashboard
//                     </Link>
//                   </NavDropdown.Item>
//                   <NavDropdown.Item>
//                     <Link onClick={handleclick} to="/login">
//                       Logout
//                     </Link>{" "}
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </>
//             )}
