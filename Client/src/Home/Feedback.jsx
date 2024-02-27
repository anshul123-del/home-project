import React from "react";
import spp from "../images/puma.png"
const Feedback = () => {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1>Client Feedback</h1>
        <h5 style={{ color: "gray" }}>
          There are many variations of passages of Lorem Ipsum available
        </h5>
        <div className="row my-4">
          <div className="col-lg-6">
            <div  className="shadow-lg p-5">
            
                <img src={spp} alt="..." height="90px" className="rounded"></img>
            
              <div style={{marginLeft:"20px"}}>
                <p className="fs-5 text-start  " style={{lineHeight:"2.7rem"}} >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <div  className="shadow-lg p-5">
              
                <img src={spp} alt="..." height="90px" className="rounded"></img>

              <div>
                <p className="fs-5 text-start  " style={{lineHeight:"2.7rem"}} >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
