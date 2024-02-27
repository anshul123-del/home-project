import React from "react";
import { Link } from "react-router-dom";
import "./About.css"
import Saving from "./Savings";
import Topabout from "./Topabout";
import Ourteam from "./Ourteam";
import Blog from "./Blog";

const Aboutus = () => {
  return (
    <>
      <div className="container-fluid abt text-center p-5">
        <div className="container text-white  abt2">
          <div className="col-12 ">
            <h1 >ABOUT US</h1>
            <Link to="/">HOME</Link>
            <Link to="/wishlist">//ABOUT US</Link>
          </div>
        </div>
      </div>
      <Topabout/>
                <Saving/>
                <Ourteam/>
                <Blog/>

     
    </>
  );
};

export default Aboutus;
