import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import "./Home.css"
const Homedelivery = () => {
  return (
    <div className="container-fluid">
      <div className="container deli p-3">
        <div className="row">
          <div className="shadow-lg p-5" style={{ display: "flex", justifyContent:"space-between", borderRadius:"20px", flexWrap:"wrap" }}>
            <div className="sec col-lg-3 col-md-6 col-sm-12">
              <TbTruckDelivery style={{fontSize:"30px"}} />
              FREE HOME DELIVERY
            </div>
            <div className="sec col-lg-3 col-md-6 col-sm-12">
              <MdPayment style={{fontSize:"30px"}} /> SECURE PAYMENTS
            </div>
            <div className="sec col-lg-3 col-md-6 col-sm-12">
              <CiDiscount1 style={{fontSize:"30px"}}/>
              ORDER DISCOUNT
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <RiCustomerService2Fill style={{fontSize:"30px"}} />
              24*7 ONLINE SUPPORT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homedelivery;
