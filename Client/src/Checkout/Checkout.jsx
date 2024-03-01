import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { FaExclamation } from "react-icons/fa";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import "./Check.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { loadStripe } from '@stripe/stripe-js';
import { Button, FloatingLabel, Table } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import axios from "axios";
const Checkout = () => {
  const { carti } = useContext(CartContext)

  //Total
  const [total, settotal] = useState(); //total
  useEffect(() => {
    settotal(
      carti.reduce((acc, crr) => {
        return acc + Number(crr.price);
      }, 0)
    );
  }, [carti]);
  const HandleOrder = (num) => {
    console.log(num);
  }
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
      <button
        className="acc"
        type="button"
        style={{ backgroundColor: "transparent", border: "0" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }


  // Login
  const [userl, setuserl] = useState({
    email: "",
    password: ""
  })

  const handlelog = (e) => {
    const { value, name } = e.target
    setuserl({ ...userl, [name]: value })
  }
  const handlesubmitlog = async (e) => {
    e.preventDefault()
    const res = await axios.post(`http://localhost:8050/log`, userl)
  }


  const [check, setcheck] = useState({
    fname: "",
    lname: "",
    company: "",
    country: "Choose...",
    Address: "",
    city: "",
    district: "Choose...",
    zip_code: "",
    phone_no: "",
    email: ""
  })
  const handlechange = (e) => {
    const { value, name } = e.target
    setcheck({ ...check, [name]: value })
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(check)
  }

  //MAkepayment
  const makepayment = async () => {
    const stripe = await loadStripe("pk_test_51OoTquSAtmHNt30iXuDuORAM20i3SVKdHGqc0ponW9d7g9weAvmAC4msaosXy3rCkWlwwVVJ6lmd6dov74NpvMiN00QRp94M72");
    const body = {
        products: carti
    };
    try {
        const response = await axios.post('http://localhost:8050/create-checkout-session', body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const sessionId = response.data.id;

        const result = await stripe.redirectToCheckout({
            sessionId: sessionId,
        });

        // Check for errors during redirection
        if (result.error) {
            console.error(result.error.message);
        }
    } catch (error) {
        console.error("Error creating Checkout session:", error);
    }
  }

  
  return (
    <>
      <div className="container-fluid wisht text-center p-5">
        <div className="container checko p-5">
          <div className="col-12 checkot">
            <h1>CHECKOUT</h1>
            <Link to="/">HOME</Link>
            <Link to="/wishlist">//CHECKOUT</Link>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row align-middle">
          <div className="col-12">
            <Accordion>
              <Card>
                <Card.Header>
                  <FaExclamation />
                  Returning Customer?
                  <CustomToggle eventKey="0">Click here to login</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="my-4">
                      <p style={{ color: "grey" }}>
                        If you have shopped with us before, please enter your
                        details below. If you are a new customer, please proceed
                        to the Billing & Shipping section.
                      </p>
                    </div>

                    <Form onSubmit={handlesubmitlog}>
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <Form.Label>Username or Email address</Form.Label>

                          <Form.Control type="email" value={userl.email} name="email" onChange={handlelog} />
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <Form.Label>Password</Form.Label>

                          <Form.Control type="text" placeholder="password" value={userl.password} name="password" onChange={handlelog} />
                        </div>
                      </div>
                      <button type="submit" className="my-3 shop">
                        Login
                      </button>{" "}
                      <Form.Check type="checkbox" label="Remember Me" />
                      <br />
                      <div className="lost my-4">
                        <Link>Lost Your Password?</Link>
                      </div>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <div className="row my-5">
              <div className="col-12">
                <Accordion>
                  <Card>
                    <Card.Header>
                      <FaExclamation /> Have a coupon?
                      <CustomToggle eventKey="0">
                        Click here to enter your code
                      </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="my-4">
                          <p style={{ color: "grey" }}>
                            If you have a coupon code, please apply it below.
                          </p>
                        </div>

                        <Form>
                          <div className="row">
                            <div className="col-lg-4 mt-3">
                              <Form.Control
                                type="text"
                                placeholder="Coupon Code"
                              />
                            </div>
                            <div className="col-lg-8 mt-3">
                              <button className="coup">APPLY CODE</button>
                            </div>
                          </div>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div>
              <h5>Billing Details</h5>
            </div>
            <div className="formm">
              <Form onSubmit={handlesubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mt-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First name" value={check.fname} name="fname" onChange={handlechange} />
                  </div>
                  <div className="col-lg-6 col-md-6 mt-3">
                    <Form.Label>Last Name</Form.Label>

                    <Form.Control type="text" placeholder="Last name" value={check.lname} name="lname" onChange={handlechange} />
                  </div>
                </div>
                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Company Name(Optional)</Form.Label>
                  <Form.Control autoComplete="off" type="text" value={check.company} name="company" onChange={handlechange} />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Select value={check.country} name="country" onChange={handlechange}>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>America</option>
                    <option>London</option>
                    <option>Europe</option>
                    <option>Australlia</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="House Number and Street Name"
                    value={check.Address}
                    name="Address"
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Town/City</Form.Label>
                  <Form.Control type="text" value={check.city} name="city" onChange={handlechange} />
                </Form.Group>

                {/* District */}
                <Form.Group controlId="formGridState">
                  <Form.Label>District</Form.Label>
                  <Form.Select value={check.district} name="district" onChange={handlechange}>
                    <option>Faridabad</option>
                    <option>India</option>
                    <option>America</option>
                    <option>London</option>
                    <option>Europe</option>
                    <option>Australlia</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Postal Code/ Zip(Optional)</Form.Label>
                  <Form.Control autoComplete="off" type="text" value={check.zip_code} name="zip_code" onChange={handlechange} />
                </Form.Group>

                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Phone(Optional)</Form.Label>
                  <Form.Control autoComplete="off" type="text" value={check.phone_no} name="phone_no" onChange={handlechange} />
                </Form.Group>

                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Email Address*</Form.Label>
                  <Form.Control autoComplete="off" type="text" value={check.email} name="email" onChange={handlechange} />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Create an Account" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Ship to a different Address"
                  />
                </Form.Group>

                {/* order notes */}
                <Form.Group className="my-3" id="formGridCheckbox">
                  <Form.Label>Order Notes(Optional)</Form.Label>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Form>
            </div>
          </div>

          {/* //Your Order */}
          <div className="col-lg-6">
            <div className="order">
              <h5>You Orders</h5>
              <div>
                <div>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Order</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        carti.map((ele) => {
                          return (
                            <>
                              <tr>
                                <td>{ele.slug}</td>
                                <td>&#36;{ele.price}</td>
                              </tr>
                            </>
                          )
                        })
                      }
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>subtotal</td>
                        <td>&#36;{total}</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>Flat Rate 2.00</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>&#36;{total}</td>
                      </tr>
                    </tfoot>
                  </Table>

                  {/* ACC */}
                  <div className="ACC">
                    <Accordion defaultActiveKey="0">
                      <Card.Header>
                        <CustomToggle eventKey="0">
                          {" "}
                          <Form.Group>
                            <Form.Check
                              inline
                              label="DIRECT BANK"
                              name="group1"
                              type="radio"
                            />
                          </Form.Group>
                        </CustomToggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <p>
                            Make your payment directly into our bank account. Please
                            use your Order ID as the payment reference. Your order
                            will not be shipped until the funds have cleared in our
                            account
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Accordion>

                    {/* 2nd */}
                    <Accordion>
                      <Card.Header>
                        <CustomToggle eventKey="1">
                          <Form.Group>
                            <Form.Check
                              inline
                              label="CHECK PAYMENTS"
                              name="group1"
                              type="radio"
                            />
                          </Form.Group>
                        </CustomToggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <p> Please send a check to Store Name, Store Street, Store
                            Town, Store State / County, Store Postcode.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Accordion>

                    <Accordion>
                      <Card.Header>
                        <CustomToggle eventKey="2">
                          <Form.Group>
                            <Form.Check
                              inline
                              label="CASH ON DELIVERY"
                              name="group1"
                              type="radio"
                            />
                          </Form.Group>
                        </CustomToggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body><p>Pay with cash upon delivery</p></Card.Body>
                      </Accordion.Collapse>
                    </Accordion>

                    <Accordion>
                      <Card.Header>
                        <CustomToggle eventKey="3">
                          {" "}
                          <Form.Group>
                            <Form.Check
                              inline
                              label="PAYPAL EXPRESS CHECKOUT  "
                              name="group1"
                              type="radio"
                            />
                          </Form.Group>
                        </CustomToggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>
                          <p>Pay via PayPal; you can pay with your credit card if you
                            don’t have a PayPal account.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Accordion>
                    {/* //StripeCheckout */}

                  </div>
                  {/* Bank-section-end */}
                  <div className="my-4">
                    <p className="priv">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our
                      <Link> privacy policy.</Link>
                    </p>
                    <Form>
                      <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="I have read and agree to the websites terms and conditions *"
                        />
                      </Form.Group>

                      <div className="logg col-12  mt-4">
                        <Button onClick={() => {
                          // HandleOrder(check),
                          makepayment()

                        }}>PLACE ORDER</Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
