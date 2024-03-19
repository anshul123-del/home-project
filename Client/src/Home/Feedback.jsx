import React from "react";
import img12 from "../images/img12.jpg"
const Feedback = () => {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1>Client Feedback</h1>
        <h5 style={{ color: "gray" }}>
          There are many variations of passages of Lorem Ipsum available
        </h5>
        <div className="row my-4 gx-5 gy-4">
          <div className="col-lg-6">
            <div className="shadow-lg p-5 row">
              <div className="col-lg-3">
                <img src={img12} alt="..." height="90px" className="rounded"></img></div>
              <div className="col-lg-8">
                 <p className="fs-5 text-start codo ">Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been</p>
                <footer className="fs-5">Dorian Codova</footer>

                </div>

            </div>
          </div>
          <div className="col-lg-6">
          <div className="shadow-lg p-5 row">
              <div className="col-lg-3">
                <img src={img12} alt="..." height="90px" className="rounded"></img></div>
              <div className="col-lg-8">
                 <p className="fs-5 text-start codo ">Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been</p>
                  <footer className="fs-5">Jaren Hammer</footer>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
