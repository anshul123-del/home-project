import React from "react";
import { Link, Outlet } from "react-router-dom";
import Productnav from "./Productnav";
import Multirange from "./Multirange";
import { Shoecont } from "../Context/Context";

const Sideproduct = () => {
  const { product, setproduct } = Shoecont();
  const { feat } = Shoecont();
  const filterresult = (catitem) => {
    const result = feat.filter((crr) => crr.category === catitem);
    setproduct(result);
  };
  const filterbrand = (catitem) => {
    const result1 = feat.filter((crr) => crr.brand === catitem);
    setproduct(result1);
  };

  return (
    <>
      <div className="container-fluid wishking text-center p-5">
        <div className="container  text-white pbt">
          <div className="col-12 pour">
            <h1>PRODUCT PAGE</h1>
            <Link className="pat" to="/">
              HOME
            </Link>
            <Link className="pat" to="/wishlist">
              //PRODUCT PAGE
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row flex-row-reverse justify-content-between">
          <div className="col-xl-9">
            <Productnav />
            <Outlet />
          </div>
          <div className="col-xl-3 side mt-5">
            <div className="topcat">
              <div>
                <h4 className="toph">Top Categories</h4>
              </div>
              <div>
                <ul className="topl">
                  <li>
                    <Link
                      className="topc"
                      onClick={() => {
                        setproduct(feat)
                      }}
                    >
                      ALL
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="topc"
                      onClick={() => {
                        filterresult("RUNNING");
                      }}
                    >
                      Running
                    </Link>
                  </li>
                  <li>
                    <Link className="topc">Walking</Link>
                  </li>
                  <li>
                    <Link
                      className="topc"
                      onClick={() => {
                        filterresult("FOOTBALL");
                      }}
                    >
                      Football
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="topc"
                      onClick={() => {
                        filterresult("CASUAL");
                      }}
                    >
                      casual
                    </Link>
                  </li>
                  <li>
                    <Link className="topc">Sneaker</Link>
                  </li>
                  <li>
                    <Link className="topc">Genuine Leather</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="topcat my-3">
              <div>
                <h4>Range</h4>
              </div>
              <div>
                {/* <span>0</span><input type="range" class="form-range" id="customRange1"/><span>3500</span> */}
                <Multirange />
              </div>
            </div>
            <div className="topcat my-3">
              <div>
                <h4 className="toph "> Color</h4>
              </div>
              <div>
                <ul className="topl topco mt-2">
                  <li className="topc1"></li>
                  <li className="topc2"></li>
                  <li className="topc3"></li>
                  <li className="topc4"></li>
                  <li className="topc5"></li>
                  <li className="topc7"></li>
                  <li className="topc8"></li>
                  <li className="topc9"></li>
                  <li className="topc10"></li>
                  <li className="topc11"></li>
                  <li className="topc12"></li>
                  <li className="topc13"></li>
                  <li className="topc14"></li>
                </ul>
              </div>
            </div>
            <div className="topcat my-3">
              <div>
                <h4 className="toph">Size</h4>
              </div>
              <div>
                <ul className="topl">
                  <li>
                    <Link className="topc">S(6)</Link>
                  </li>
                  <li>
                    <Link className="topc">M4</Link>
                  </li>
                  <li>
                    <Link className="topc">L2</Link>
                  </li>
                  <li>
                    <Link className="topc">XL</Link>
                  </li>
                  <li>
                    <Link className="topc">XXL</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="topcat my-3">
              <div className="mt-3">
                <h4 className="toph">Brand</h4>
              </div>
              <div className="mt-3">
                <ul className="topl">
                  <li>
                    <Link className="topc" onClick={()=>{filterbrand('ADIDAS')}}>ADIDAS</Link>
                  </li>
                  <li>
                    <Link className="topc">PUMA</Link>
                  </li>
                  <li>
                    <Link className="topc" onClick={()=>{filterbrand('Vans')}}>VANS</Link>
                  </li>
                  <li>
                    <Link className="topc" onClick={()=>{filterbrand('Reebok')}}>REEBOK</Link>
                  </li>
                  <li>
                    <Link className="topc" onClick={()=>{filterbrand('NIKE')}}>NIKE</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sideproduct;
