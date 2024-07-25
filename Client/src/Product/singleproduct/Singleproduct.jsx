import React, { useContext } from "react";
// import Imgpro from "../../images/img2.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import "./Singleproduct.css";
import Accordion from "react-bootstrap/Accordion";
import Rating from "@mui/material/Rating";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Related from "./Related";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Shoecont } from "../../Context/Context";
import { CartContext } from "../../Context/CartContext";
import axios from "axios";
import { Authcontext } from "../../Context/AuthContext";

const Singleproduct = () => {
  const [product, setproduct] = useState({});
  const { feat } = Shoecont();
  const { _id } = useParams();
  const { wishlist, setwishlist } = useContext(CartContext);
  const{carti,setcarti} = useContext(CartContext)
  // console.log(wishlist);
  const getdata = () => {
    // console.log(feat);
    const newproduct = feat.find((item) => item._id === _id);
    if (newproduct) {
      // console.log(newproduct);
      setproduct(newproduct);
    } else {
      console.log(`Product with id ${_id} not found`);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  const [value, setValue] = useState(2);
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

  const { auth, } = useContext(Authcontext);

  const [addcart, setaddcart] = useState({
    "userid": "",
    "product": [
      {
        "productid": ""
      },
    ]
  })
  const addcartt = async (pid) => {
    setaddcart({ userid: auth?.user?.id, product: [{ productid: pid }] })

    const data = await axios.post(`http://localhost:8050/addcart`, addcart)
    console.log(data)

  }
  return (
    <div>
      <div>
        
          <div className="container-fluid">
          <div className="row spd">
              <div className="col-12 text center">
                  <h1>PRODUCT DETAILS</h1>
                  <div><Link>HOME</Link></div>
                 <div><Link>//PRODUCT DETAILS</Link></div>  
              </div>
       
          </div>
          <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="p-2 mt-4">
                <img src={product.image} className="img-fluid pvr"></img>
              </div>
            </div>
            <div className="col-lg-6 p-2 mt-4 ">
              <h3>{product.category}</h3>
              <h2>${product.price}</h2>
              <h5>{product.slug}</h5>
              <h5>{product.brand}</h5>
              <p><Rating /></p>
              <hr></hr>

              <p className="fs-5">
                Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad mill veniam, quis n
                ostrud exercitation ullamco laboris nisi ut aliquip exet commodo consequat.
                Duis aute irure dolor
              </p>
              <div className="main-side">
                <div className="quantity">
                  <p className="inp-inp">1</p>
                  <div className="sub">-</div>
                  <div className="plus">+</div>

                </div>
                <div><button className="cactus" onClick={()=>{setcarti([...carti,product]),localStorage.setItem('cart',JSON.stringify([...carti,product]))}}>Add toCart</button></div>
              </div>

              <div className=" wiscart">
                <div className="mt-4" style={{ cursor: "pointer" }} onClick={() => { setwishlist([...wishlist, product]), localStorage.setItem('wish', JSON.stringify([...wishlist, product])) }}><h5><FaRegHeart className="text-danger mx-2" />
                  Add to Wishlist</h5></div>
                <div className="compte" style={{ cursor: "pointer" }}><h5><FaCodeCompare className="text-danger mx-2" />
                  Add to Compare</h5></div>
              </div>
              <hr></hr>
              <div className="d-flex justify-content-between">
                <div >
                  <p><span className="text-danger fs-5">Code:</span><span className="mx-1 fs-5">ch-256xl</span></p>
                </div>
                <div ><p className="text-danger fs-5">Share<span className="mx-2"><FaFacebook />{" "}
                  <FaInstagram /> <FaWhatsapp /> <FaTwitter /></span></p></div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="container">
          <div className="row">
            <Tabs
              defaultActiveKey="Review"
              id="justify-tab-example"
              className="mb-3"
              justify
              variant="underline"
            >
              <Tab eventKey="Information" title="Information">
                <div className="bor-review">
                  <p className="font-review fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim adlo minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in tun tuni reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserun mollit anim id est laborum. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rel aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur.
                  </p>
                </div>
              </Tab>
              <Tab eventKey="description" title="Description">
                <div className="bor-review">
                  <p className="font-review fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim adlo minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in tun tuni reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserun mollit anim id est laborum. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rel aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur.
                  </p>
                </div>
              </Tab>
              <Tab eventKey="Review" title="Review (05)" variant="underline">
                <div className="bor-review">
                  <div className="bor-review-2">
                    <h2>Customer Reviews</h2>
                    <Accordion>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
                          <div className="d-flex gap-3 flex-wrap">
                            <Rating
                              name="simple-controlled"
                              value={value}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                            />
                            <p>Based on 5 reviews</p>
                          </div>
                          <p>
                            <CustomToggle eventKey="0" className="flex-end">
                              write a review
                            </CustomToggle>
                          </p>
                        </div>
                        <br />
                        <hr />
                        <Accordion.Collapse eventKey="0">
                          <div>
                            <h3 className="mt-3">Write a review</h3>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Name"
                                  size="lg"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput2"
                              >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                  type="email"
                                  placeholder="name@example.com"
                                  size="lg"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput3"
                              >
                                <Form.Label>Review</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="name@example.com"
                                  size="lg"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput3"
                              >
                                <Form.Label>Rating</Form.Label>
                                <br />
                                <Rating
                                  name="simple-controlled"
                                  value={value}
                                  onChange={(event, newValue) => {
                                    setValue(newValue);
                                  }}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput3"
                              >
                                <Form.Label>Review title</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder=""
                                  size="lg"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                              >
                                <Form.Label>
                                  Body of Review(1500 words)
                                </Form.Label>
                                <Form.Control as="textarea" rows={12} />
                              </Form.Group>
                              <Button className="btn btn-dark text-end ">
                                Post Comment
                              </Button>
                            </Form>
                          </div>
                        </Accordion.Collapse>
                      </div>
                    </Accordion>

                    <div className="mar-review">
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      <h3 className="mar-review-2">
                        Awesome shipping service!
                      </h3>
                      <p className="mar-review-2 text-gray">
                        Nantu Nayal no Sep 30, 2022
                      </p>
                      <p className="mar-review-2">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                      </p>
                      <p className="text-end">Report as Inappropriate</p>
                    </div>
                    <hr />
                    <div className="mar-review-2">
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      <h3 className="mar-review-2">
                        Awesome shipping service!
                      </h3>
                      <p className="mar-review-2">
                        Nantu Nayal no Sep 30, 2022
                      </p>
                      <p className="mar-review-2">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                      </p>
                      <p className="text-end">Report as Inappropriate</p>
                    </div>
                    <hr />
                    <div>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        className="mar-review-2"
                      />
                      <h3 className="mar-review-2">
                        Awesome shipping service!
                      </h3>
                      <p className="mar-review-2">
                        Nantu Nayal no Sep 30, 2022
                      </p>{" "}
                      className='mar-review-2'
                      <p className="mar-review-2">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                      </p>
                      <p className="text-end">Report as Inappropriate</p>
                    </div>
                    <br />
                    <hr />
                    <div>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                          className = "mar-review-2";
                        }}
                      />
                      <h3 className="mar-review-2">
                        Awesome shipping service!
                      </h3>
                      <p className="mar-review-2">
                        Nantu Nayal no Sep 30, 2022
                      </p>
                      <p className="mar-review-2">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                      </p>
                      <p className="text-end">Report as Inappropriate</p>
                    </div>
                    <br />
                    <hr />
                    <div>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        className="mar-review-2"
                      />
                      <h3 className="mar-review-2">
                        Awesome shipping service!
                      </h3>
                      <p>Nantu Nayal no Sep 30, 2022</p>
                      <p className="mar-review-2">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                      </p>
                      <p className="text-end">Report as Inappropriate</p>
                    </div>
                    <br />
                    <hr />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <Related />
    </div>
  );
};

export default Singleproduct;
