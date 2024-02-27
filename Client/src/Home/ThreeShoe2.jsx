import React from "react";

const ThreeShoe2 = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="container text-center ">
        <div className="row">
          <div className="col-lg-4 col-md-6 image" style={{height:"350px"}}>
            <div id="imge" >
              <div>
                <h2>Sports Shoes</h2>
                <h5>From $95.00</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 image">
            <div style={{height:"350px"}}>
              <div id="img2">
                <h2>Latest Shoes</h2>
                <h5>From $95.00</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 image">
            <div style={{height:"350px"}}>
              <div id="img3">
                <h2>Office Shoes</h2>
                <h5>From $95.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeShoe2;
