import React, { useEffect, useState } from "react";
import "./Product.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { GiGothicCross } from "react-icons/gi";
import { Shoecont } from "../Context/Context";

const ProductGrid = () => {
  const [page, setpage] = useState(1);
  const [viewdata, setviewdata] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    setviewdata(item);
    navigate(`/singlepro/${item._id}`);
  };
  const pageselect = (selectedpage) => {
    if (
      selectedpage >= 1 &&
      selectedpage <= product.length &&
      selectedpage !== page
    )
      setpage(selectedpage);
  };
  const { product } = Shoecont();
  const shoesdata = product.slice(page * 10 - 10, page * 10).map((item) => {
    const { _id } = item;
    return (
      <div key={item._id} className="  card-1 col-lg-4 col-md-6">
        <Link to={`/singlepro/${_id}`}>
          <div className="cary">
            <img src={item.image} className="card-img-top img-fluid img-bor" />
          </div>
        </Link>
        <div className="card-body mt-3">
          <h5 className="card-title"> Category : {item.category}</h5>
          <p className="card-text">Brand : {item.brand}</p>
          <p className="card-text">Price : {item.price}$</p>
        </div>
        <a href="#" className="card-2" onClick={() => handleCardClick(item)}>
          <FaEye />
        </a>
        <Link to="/cart" className="card-3">
          <FaShoppingCart />
        </Link>
        <a href="#" className="card-4" onClick={() => handleCardClick(item)}>
          <FaShuffle />
        </a>
        <a href="#" className="card-5" onClick={() => handleCardClick(item)}>
          <GiGothicCross />
        </a>
      </div>
    );
  });

  return (
    <div className="container mar-top-bottom">
      <div className="row">{shoesdata}</div>
      {product.length > 0 && (
        <div className="pagination">
          <span onClick={() => pageselect(page - 1)}>
            <FaArrowLeft />
          </span>
          {[...Array(Math.floor(product.length / 6))].map((_, ind) => (
            <span
              className={page === ind + 1 ? "pagination_selected" : ""}
              onClick={() => pageselect(ind + 1)}
              key={ind + 1}
            >
              {ind + 1}
            </span>
          ))}
          <span onClick={() => pageselect(page + 1)}>
            
            <FaArrowRight />
          </span>
        </div>
      )}
    </div>
  );
};
export default ProductGrid;
