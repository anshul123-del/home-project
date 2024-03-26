import React, { useContext, useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { CartContext } from "../Context/CartContext";
import "./Cart.css";
import { Table } from "react-bootstrap";
import axios from "axios"
const Cart = () => {
  const navigate = useNavigate();
  const navigate1 = useNavigate();
  const [coupon, setCoupon] = useState("")
  const [discountVal, setDiscountval] = useState(0)
  const { carti, setcarti } = useContext(CartContext);
  const del = (pid) => {

    const deleteddata = carti.filter((ele, ind) => ind !== pid);
    setcarti(deleteddata);
    localStorage.setItem("cart", JSON.stringify(deleteddata));
  };
  const alldel = () => {
    setcarti([]);
    localStorage.removeItem("cart");
  };
  const [total, settotal] = useState(); //total
  useEffect(() => {
    settotal(
      carti.reduce((acc, crr) => {
        return acc + Number(crr.price * crr.quantity);
      }, 0)
    );
  }, [carti]);

  //Increment Section In Quantity
  const IncrementQuantity = (i) => {
    console.log(i);
    const ExistingItem = carti.find((elem) => {
      return elem._id === i
    })

    if (ExistingItem) {
      const ParsedArr = JSON.parse(localStorage.getItem("cart"))
      ParsedArr.map((elem) => {
        if (elem._id === i) {
          elem.quantity++
        }
      })
      localStorage.setItem("cart", JSON.stringify(ParsedArr))
      setcarti(ParsedArr)
    }
  }
  //Decrement Section In Quantity
  const DecrementQuantity = (i) => {
    console.log(i);
    const ExistingItem = carti.find((elem) => {
      return elem._id === i
    })

    if (ExistingItem) {
      const ParsedArr = JSON.parse(localStorage.getItem("cart"))
      ParsedArr.map((elem) => {
        if (elem._id === i) {
          elem.quantity--
        }
      })
      localStorage.setItem("cart", JSON.stringify(ParsedArr))
      setcarti(ParsedArr)
    }
  }

  const ApplyCoupon = async () => {
    const data = await axios.post("http://localhost:8050/coupon/getcoupon", {CouponCode: coupon })
    setDiscountval(data.data[0].discountvalue)
  }
  useEffect(() => {
    settotal((prev) => prev - discountVal)
  }, [discountVal])

  return (
    <>
      <div className="container-fluid carti text-center p-5">
        <div className="container text-white p-5">
          <div className="col-12 sho">
            <h1>SHOPPING CART</h1>
            <Link to="/">HOME</Link>
            <Link to="/wishlist">//CART</Link>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row ">
          <div className="col-sm-12 p-5  tab">
            <Table responsive>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {carti.length !== 0 && carti?.map((ele, ind) => {
                  return (
                    <tr key={ele._id}>
                      <th scope="row" className="align-middle">
                        <button
                          className="del"
                          onClick={() => {
                            del(ind);
                          }}
                        >
                          <MdDelete />
                        </button>
                      </th>
                      <td className="align-middle">
                        <img
                          src={ele.image}
                          alt="..."
                          className="rounded img-fluid"
                          style={{ width: "100px" }}
                        ></img>
                        {ele.category}
                      </td>
                      <td className="align-middle">${ele.price}</td>
                      <td className="align-middle">
                        <span className="qty">
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button onClick={() => {
                              IncrementQuantity(ele._id)
                            }}>+</button>
                            <span>{ele.quantity}</span>
                            <button onClick={() => { DecrementQuantity(ele._id) }}>-</button>

                          </div>
                        </span>
                      </td >
                      <td className="align-middle">$ {ele.price * ele.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="row">
          <div className=" col-lg-8 col-sm-12 my-3">
            <button
              type="submit"
              className="updatecart"
              onClick={() => {
                navigate("/product");
              }}
            >
              CONTINUE SHOPPING
            </button>
          </div>
          <div className="col-lg-2 col-sm-12 my-3 ">
            <button
              type="submit"
              className="updatecart1"
              onClick={() => {
                alldel();
              }}
            >
              CLEAR CART
            </button>
          </div>
          <div className="col-lg-2 col-sm-12 my-3">
            <button type="submit" className="updatecart1">
              UPDATE CART
            </button>
          </div>
        </div>

        {/* CALCULATE SHIPPING */}
        <div className="row my-5">
          <div className="col-lg-4">
            <p>Estimate Your Shipping fee*</p>
            <h6>Calculate Shipping</h6>
            <h6 className="mt-5">
              <Form>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Select defaultValue="Choose...">
                    <option>Select a Country...</option>
                    <option>India</option>
                    <option>America</option>
                    <option>London</option>
                    <option>Europe</option>
                    <option>Australlia</option>
                  </Form.Select>
                </Form.Group>
                <br />
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                    type="text"
                    placeholder="State/Country"
                    autoComplete="off"
                  />
                </Form.Group>
                <br />
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                    type="text"
                    placeholder="Town/City"
                    autoComplete="off"
                  />
                </Form.Group>
                <br />
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Control placeholder="Postcode/Zip" autoComplete="off" />
                </Form.Group>
              </Form>
            </h6>
            <h6 className="text-end pt-4 upcart">
              <Link>UPDATE CART</Link>
            </h6>
          </div>
          <div className="col-lg-4 coupon my-3">
            <h5>Coupon Code</h5>
            <p className="my-3">Enter your coupon code if you have one.</p>
            <div className="text-center ">
              <form>
                <input type="text" placeholder="Enter your Coupon Code" onChange={(e) => {
                  setCoupon(e.target.value)
                }}></input>
              </form>
            </div>
            <h6 className="text-end pt-4">
              <button onClick={() => {
                ApplyCoupon()
              }}>APPLY COUPON</button>
            </h6>
          </div>

          {/* CARD-TOTAL */}
          <div className="col-lg-4 cardtotal">
            <h5>Cart Total</h5>
            <div>
              <div className="my-4">
                {" "}
                <h6>Shipping</h6>
              </div>
              <div className="p-3">
                <Table responsive className="shadow-lg ">
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>${total}</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>
                        <ul>
                          <li>
                            <input
                              type="radio"
                              name="shipping"
                              value="Flat Rate"
                            ></input>{" "}
                            <label>Flat Rate</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="shipping"
                              value="free Shipping"
                            ></input>{" "}
                            <label>Free Shipping</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="shipping"
                              value="local Pickup"
                            ></input>
                            <label>Local Pickup</label>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>${total}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="checkout mt-3">
              <button onClick={() => {
                navigate1("/checkout", {
                  state: discountVal
                })
              }}>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
