import React from "react";
import { Card } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { GiGothicCross } from "react-icons/gi";
import { Shoecont } from "../Context/Context";
import "./Home.css"

const FeaturedItems = () => {
  const { feat } = Shoecont();

  const navigate = useNavigate();




  const data = feat
    .filter((ele, ind) => ind < 8)
    .map((ele) => {
      const { _id } = ele
      return (

        <div className="col-lg-3 col-md-4 col-sm-6 p-2 car0" key={ele._id}>
          <Link to={`/singlepro/${_id}`}>
            <div className="img-wrap">
              <div className="img-wrap1"><img src={ele.image} className="img-fluid cardh"></img></div>
            </div>

          </Link>
          <h6 className="my-3">Men/Women</h6>
          <h6 className="">{ele.category}</h6>
          <h6>{ele.price}$</h6>

          <Link to="/wishlist" className="car1">
            <FaRegHeart />
          </Link>
          <Link to="/cart" className="car2">
            <FaShoppingCart />
          </Link>
          <Link href="#" className="car3">
            <FaShuffle />
          </Link>
          <a href="#" className="car4">
            <GiGothicCross />
          </a>
        </div>

      );
    });

  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1>Featured Items</h1>
        <h5 style={{ color: "grey" }}>
          There are many variations of passages of Lorem Ipsum available
        </h5>
        <div className="mt-5 text-start row">{data}</div>
      </div>
    </div>
  );
};

export default FeaturedItems;
