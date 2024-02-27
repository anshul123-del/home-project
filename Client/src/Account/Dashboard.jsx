import React,{ useContext } from "react";
import "./Account.css";
import { Authcontext } from '../Context/AuthContext'
import { Link } from "react-router-dom";
const Dashboard = () => {
  const{auth, setauth} = useContext(Authcontext)
  const handleclick = () => {
    setauth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-sm-12">
          <div className="dashboard">
            <h4>Dashboard</h4>
            <p></p>
            <p className="das-font">
              Hello,<span className="text-danger">{auth?.user?.name || "tuntuni"}</span>( If not{" "}
              <span className="text-danger">{auth?.user?.name || "tuntuni"} <Link to="/login"onClick={handleclick}>!logout</Link>)</span>
            </p>
            <p className="das-font">
              From your account dashboard. you can easily check & view your
              recent orders, manage your shipping and billing addresses and edit
              your password and account details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
