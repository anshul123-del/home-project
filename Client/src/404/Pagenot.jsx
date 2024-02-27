import React from "react";
import "./Pagenot.css"
import { useNavigate } from "react-router-dom";
const Pagenot = () => {
    const navigate = useNavigate()
  return (
    <div className="container text-center">
      <div className="page4">
        <div>
          <h1 className="for">404</h1>
          <h1 className="fond">Page Cannot be Found!</h1>
        </div>
        <div>
          <p>
            Seems like nothing was found at this location. Try something else or
            you can go back to the homepage following the button below!
          </p>
        </div>
        <button className="my-3 navi"  variant="info" onClick={()=>{navigate("/")}}>Back to Home</button>
      </div>
    </div>
  );
};

export default Pagenot;
