import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { GiGothicCross } from "react-icons/gi";
import { CartContext } from "../Context/CartContext";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Shoecont } from "../Context/Context";
const Productlist = () => {
  const [data, setdata] = useState([]);
  const [viewdata, setviewdata] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    setviewdata(item);
    navigate(`/shoesdata/${item._id}`);
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
  const { carti, setcarti } = useContext(CartContext);
  const[page,setpage] = useState(1)
  const shoesdata = product.slice(page*10-10, page * 10)
    .map((item, ind) => {
      const{_id} = item
      return (
        <>
          <div className="col-12 shadow mb-3 colt ">
            <div className="row">
              <div key={ind} className="cdi card-1 col-lg-4 col-md-6 my-4">
              <Link to={`/singlepro/${_id}`}>  <img
                  src={item.image}
                  class="card-img-top img-fluid img-bor"
                  style={{ height: "200px", width: "100%" }}
                />
</Link>
                <a
                  href="#"
                  className="card-2"
                  onClick={() => handleCardClick(item)}
                >
                  <FaEye />
                </a>
                <a
                  href="#"
                  className="card-3"
                  onClick={() => handleCardClick(item)}
                >
                  <FaShoppingCart />
                </a>
                <a
                  href="#"
                  className="card-4"
                  onClick={() => handleCardClick(item)}
                >
                  <FaShuffle />
                </a>
                <a
                  href="#"
                  className="card-5"
                  onClick={() => handleCardClick(item)}
                >
                  <GiGothicCross />
                </a>
              </div>

              <div className=" ms-auto cdp col-lg-7 col-md-6 my-4">
                <h6>Mens/Women</h6>
                <h4>Leather Mens Slipper</h4>
                <h1>${item.price}</h1>
                <h6 className="adi">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem quo, rerum rem soluta quisquam, repellat is
                  deleniti omnis culpa ea quis provident dolore esse, offici
                  modi dolorem nam cum eligendi enim!
                </h6>
                <button
                  className="list"
                  onClick={() => {
                    setcarti(
                      [...carti, item],
                    );
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...carti, item])
                    )
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </>
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
export default Productlist;
