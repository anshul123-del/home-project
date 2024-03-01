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
import useFooterWindow from "../usewidow/FooterWindow";
import { useNavigate } from "react-router-dom";
import Nav2 from "./Nav2";
import { useSearch } from "../Context/Search";
import axios from "axios";
const Seearch = () => {

    const{searchi, setsearchi,baseurl} = useSearch()
  const { width } = useFooterWindow();

  const [show, setShow] = useState(false);

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
    const deleted = carti.filter((ele, ind) => ind!==pind)
      setcarti(deleted);
      localStorage.setItem('cart',JSON.stringify(deleted))
  };

    const navigate = useNavigate()
    const handlesubmit = async(e)=>{
      e.preventDefault()
          try {
            const {data} = await axios.get(`${baseurl}/search/${searchi.keyword}`)
              setsearchi({...searchi,results:data})
              console.log(searchi.results)
            navigate("/search")
          } catch (error) {
              console.log(error)
          }
    }
  return (
    <>
      {
        width>990?(
          <>
           <div className="container-fluid">
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-4 col-sm-6 text-center">
            <Link to="/" style={{textDecoration:"none"}}><h1 style={{ fontWeight: "bolder",color:"black"}}>Shome</h1></Link> 
            </div>
            <div className="col-lg-4 ser">
              <form className="d-flex " role="search" onSubmit={handlesubmit}>
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="searchbar"
                  value={searchi.keyword}
                  onChange={(e)=>setsearchi({...searchi, keyword:e.target.value})}
                  autoComplete="off"
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
            <div className="col-lg-4 col-sm-6 text-center wishlist">
              <span>
                <Link to="/wishlist">
                  {" "}
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
            {carti.map((ele,ind) => {
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
                    <IoMdClose onClick={()=>{del(ind)}} />
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
      </Offcanvas>

          </>
        ):(
          <Nav2/>
        )
      }
         </>
  );
};

export default Seearch;
