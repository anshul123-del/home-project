import React, { useEffect, useState } from "react";
import { responsive } from "../Multicarousel/Car";
import Carousel from "react-multi-carousel";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ButtonGroup from "./ButtonGroup";
import { Shoecont } from "../Context/Context";
const BestSeller = () => {
  const { feat } = Shoecont();

  const data = feat.map((ele) => {
    return (
      <div className="col-lg-3 col-md-6 col-sm-2 text-start" key={ele.id}>
        <Link>
          {" "}
          <Card
            style={{ width: "15rem", height: "15rem" }}
            className="mb-4 cardd align-items-center p-2"
          >
            <Card.Img
              variant="top"
              src={ele.image}
              className="img-fluid rounded-start"
            />
          </Card>
        </Link>
        <h6>{ele.category}</h6>
        <h6>{ele.price}$</h6>
      </div>
    );
  });

  return (
    <>
      <div className="container-fluid mt-4 ">
        <div className="container text-center">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="p-5">
              <h1>Best Seller</h1>
              <h5 className="text-center" style={{ color: "gray" }}>
                There are many variations of passages of Lorem Ipsum available
              </h5>
            </div>
          </div>
          <div className="row text-center">
            <Carousel
              swipeable={true}
              draggable={true}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
              responsive={responsive}
            >
              {data}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
