import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiBasketball } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaCcMastercard } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import useFooterWindow from "../usewidow/FooterWindow";
import AccordianFooter from "./Accordianfooter/AccordianFooter";

const Footerr = () => {
  const { width } = useFooterWindow();
  return (
    <>
      {width > 750 ? (
        <>
          <div className="container-fluid foot">
            <div className="container">
              <div className="row text-white foota">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <h1>Shome</h1>
                  <p
                    style={{
                      fontWeight: "lighter",
                      fontSize: "20px",
                      lineHeight: "2.5rem",
                    }}
                  >
                    Lorem ipsum dolor sit amet consl adipisi elit, sed do
                    eiusmod templ incididunt ut labore
                  </p>
                  <button>
                    {" "}
                    <Link>
                      <FaFacebook />
                    </Link>
                  </button>

                  <button>
                    <Link>
                      <CiBasketball />
                    </Link>
                  </button>
                  <button>
                    <Link>
                      <FaPinterestP />
                    </Link>
                  </button>
                  <button>
                    <Link>
                      <CiTwitter />
                    </Link>
                  </button>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 services">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <Link>Home monitoring</Link>
                    </li>
                    <li>
                      <Link>Air Filters</Link>
                    </li>
                    <li>
                      <Link>Professional installation</Link>
                    </li>
                    <li>
                      <Link>Smart Buildings</Link>
                    </li>
                    <li>
                      <Link>For Contractors</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <h3>My Account</h3>
                  <ul>
                    <li>
                      <Link>Home monitoring</Link>
                    </li>
                    <li>
                      <Link>Air Filters</Link>
                    </li>
                    <li>
                      <Link>Professional installation</Link>
                    </li>
                    <li>
                      <Link>Smart Buildings</Link>
                    </li>
                    <li>
                      <Link>For Contractors</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <h3>Contact Info</h3>
                  <ul>
                    <li>
                      <Link>Home monitoring</Link>
                    </li>
                    <li>
                      <Link>Air Filters</Link>
                    </li>
                    <li>
                      <Link>Professional installation</Link>
                    </li>
                    <li>
                      <Link>Smart Buildings</Link>
                    </li>
                    <li>
                      <Link>For Contractors</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid" style={{ background: "#36393F" }}>
            <div className="container text-center">
              <div className="row text-white" style={{ padding: "20px" }}>
                <div className="col-lg-6">
                  <p>2021 Shome.Made with 💓 by Codecarnival</p>
                </div>
                <div className="col-lg-6 cardd ">
                  <Link>
                    <FaCcMastercard style={{ fontSize: "30px" }} />
                  </Link>
                  <Link>
                    <CiCreditCard1 style={{ fontSize: "30px" }} />
                  </Link>
                  <Link>
                    <FaCcVisa style={{ fontSize: "30px" }} />
                  </Link>
                  <Link>
                    <FaCcPaypal style={{ fontSize: "30px" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <AccordianFooter/>
        </>
      )}
    </>
  );
};

export default Footerr;
