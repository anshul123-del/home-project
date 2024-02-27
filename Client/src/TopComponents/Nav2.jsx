import React, { useContext, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { CartContext } from "../Context/CartContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaDeleteLeft } from "react-icons/fa6";

const Nav2 = () => {
  const [show, setShow] = useState(false);
  const [showham, setShowham] = useState(false);
  const [showsearch, setShowsearch] = useState(false);

  const handlesearch = () => setShowsearch(true);
  const handleclosesearch = () => setShowsearch(false);
  const handleham = () => setShowham(true);
  const handleCloseham = () => setShowham(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { carti, setcarti } = useContext(CartContext);
  const [total, settotal] = useState(); //total

  useEffect(() => {
    settotal(
      carti.reduce((acc, crr) => {
        return acc + Number(crr.price);
      }, 0)
    );
  }, [carti]);
  const del = (pind) => {
    const deleted = carti.filter((ele, ind) => ind !== pind);
    setcarti(deleted);
    localStorage.setItem("cart", JSON.stringify(deleted));
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container my-4">
          <div className="d-flex  justify-content-between flex-wrap">
            <div className=" text-start">
              <h1 style={{ fontWeight: "bolder" }}>Shome</h1>
            </div>

            <div className="  wishlist text-center">
              <span>
                <button className="btn" onClick={handlesearch}>
                  <FaMagnifyingGlass style={{ fontSize: "22px" }} />
                </button>
              </span>
              <span>
                <Link to="/wishlist">
                  <FaRegHeart style={{ fontSize: "25px" }} />
                </Link>
              </span>
              <span onClick={handleShow}>
                <Link className="px-3" style={{ position: "relative" }}>
                  <IoBagHandleOutline
                    className="cart"
                    style={{ fontSize: "25px", color: "black" }}
                  />
                  <Badge
                    bg="danger"
                    style={{
                      fontSize: "11px",
                      position: "absolute",
                      left: "32px",
                      borderRadius: "50%",
                    }}
                  >
                    {carti.length}
                  </Badge>
                </Link>
              </span>
              <span onClick={handleham}>
                <Link className="px-3" style={{ position: "relative" }}>
                  <RxHamburgerMenu
                    className="cart"
                    style={{ fontSize: "25px", color: "black" }}
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className="off">
          <Offcanvas.Title className="cart container">
            <div>Shopping Cart</div>
          </Offcanvas.Title>
          <div
            onClick={() => {
              handleClose();
            }}
          >
            <span className="text-end">
              <MdArrowForwardIos />
            </span>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container cart">
            {carti.map((ele, ind) => {
              return (
                <div className="row my-4">
                  <div className="col-4">
                    <img src={ele.image} alt="..." className="img-fluid"></img>
                  </div>
                  <div className="col-6">
                    <Link>{ele.category}</Link>
                    <br />${ele.price}
                  </div>
                  <div className="col-2">
                    <IoMdClose
                      onClick={() => {
                        del(ind);
                      }}
                    />
                  </div>
                </div>
              );
            })}

            <div className="row">
              <div className="col-6 fs-4">Subtotal</div>
              <div className="col-6 fs-4 text-end">${total}</div>
            </div>

            <div className="row my-5 text-center">
              <div className="col-12 my-3 check">
                <button
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <Link to="/cart">VIEW CART</Link>
                </button>
              </div>
              <div className="col-12 check">
                <button
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <Link to="/checkout">CHECKOUT</Link>
                </button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>

        {/* //Navaccordian */}
      </Offcanvas>
      <Offcanvas show={showham} onHide={handleCloseham} placement="start">
        <Offcanvas.Header className="offs">
          <Offcanvas.Title className=" container">
            <div>Menu</div>
          </Offcanvas.Title>
          <div
            onClick={() => {
              handleCloseham();
            }}
          >
            <span className="text-end">
              <IoIosArrowBack style={{ fontSize: "20px" }} />
            </span>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="offbody" style={{ padding: "0" }}>
          <div className="itemin">
            <ul>
              <li className="contact">
                <Link>
                  <FaPhoneAlt className="offi" />
                  +00 123 456 789
                </Link>
              </li>
              <li className="email">
                <Link>
                  <IoMail className="offi" />
                  demo@gmail.com
                </Link>
              </li>

              <li>
                <Link>
                  <IoPersonSharp className="offi" />
                  Account
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    className="accordion-button collapsed hote"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "white" }}
                    className="accordion-button collapsed hote"
                    aria-expanded="false"
                  >
                    About
                  </Link>
                </h2>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Pages
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul className="moni">
                      <li>
                        <Link to="/account" className="filter">
                          Account
                        </Link>
                      </li>
                      <li>
                        <Link to="/login" className="filter">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/register" className="filter">
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link to="/pagenotfound" className="filter">
                          Page Not Found
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item ">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsemetoo"
                    aria-expanded="false"
                    aria-controls="flush-collapsemetoo"
                  >
                    Shop
                  </button>
                </h2>
                <div
                  id="flush-collapsemetoo"
                  className="accordion-collapse collapse accordian-flush "
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                          >
                            Shop Layout
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseOne"
                          class="accordion-collapse collapse show"
                        >
                          <div class="accordion-body">
                            <ul className="moni">
                              <li>
                                <Link to="/product" className="filter">
                                  shop 3 column
                                </Link>
                              </li>
                              <li>
                                <Link to="/product" className="filter">
                                  shop 4 column
                                </Link>
                              </li>
                              <li>
                                <Link to="/sideproduct" className="filter">
                                  shop left sidebar
                                </Link>
                              </li>
                              <li>
                                <Link to="/sideproduct" className="filter">
                                  Shop Right Sidebar
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapsemetoo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapsemetoo"
                          >
                            Single Product
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapsemetoo"
                          class="accordion-collapse collapse"
                        >
                          <div class="accordion-body">
                            <ul className="moni">
                              <li>
                                <Link to="/account" className="filter">
                                  Single Product Normal
                                </Link>
                              </li>
                              <li>
                                <Link to="/login" className="filter">
                                  Single Product Normal
                                </Link>
                              </li>
                              <li>
                                <Link to="/register" className="filter">
                                  Single Product Normal
                                </Link>
                              </li>
                              <li>
                                <Link to="/pagenotfound" className="filter">
                                  Single Product Normal
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapsepage"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapsepage"
                          >
                            Other pages
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapsepage"
                          class="accordion-collapse collapse"
                        >
                          <div class="accordion-body">
                            <ul className="moni">
                              <li>
                                <Link to="/cart" className="filter">
                                  Shopping Cart
                                </Link>
                              </li>
                              <li>
                                <Link to="/checkout" className="filter">
                                  Checkout
                                </Link>
                              </li>
                              <li>
                                <Link to="/wishlist" className="filter">
                                  Wishlist
                                </Link>
                              </li>
                              <li>
                                <Link to="/compare" className="filter">
                                  Compare
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseblog"
                    aria-expanded="false"
                    aria-controls="flush-collapseblog"
                  >
                    Blog
                  </button>
                </h2>
                <div
                  id="flush-collapseblog"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul className="moni">
                      <li>
                        <Link className="filter">Single Blog</Link>
                      </li>
                      <li>
                        <Link className="filter">Grid Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "white" }}
                    className="accordion-button collapsed hote"
                    aria-expanded="false"
                  >
                    Contact
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* //searchbar */}
      <Offcanvas show={showsearch} onHide={handleclosesearch} placement="top">
        <Offcanvas.Header>
          <Offcanvas.Title className="cart container"></Offcanvas.Title>
          <div onClick={handleclosesearch}>
            <span className="text-end">
              <FaDeleteLeft />
            </span>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            <div className="row">
              <div className="col-12">
                Start Typing And Press Enter To Search Search
              </div>
              <div className="col-12 mt-4">
                <form className="d-flex " role="search">
                  <input
                    className="form-control me-2 "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    id="searchbar"
                  />
                  <button
                    className="btn btn-success"
                    type="submit"
                    id="searchbtn"
                  >
                    <FaMagnifyingGlass />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Nav2;
