import React from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { Shoecont } from "../Context/Context";

const FeaturedItems = () => {
  const { feat } = Shoecont();

  const navigate = useNavigate();

  const data = feat
    .filter((ele, ind) => ind < 8)
    .map((ele) => {
      const { _id } = ele
      return (

        <div className="col-lg-3 col-md-4 col-sm-6" key={ele.id}>
          <Link to={`/singlepro/${_id}`}>
            {" "}
            <Card className="align-items-center p-2">
              <Card.Img
                variant="top"
                src={ele.image}
                className="img-fluid rounded-start"
              />
              <Card.Body>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <h6>{ele.category}</h6>
          <h6>{ele.price}$</h6>
         
        </div>
      );
    });

  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1>Featured Items</h1>
        <h5 style={{ color: "grey" }}>
          There are many variations of passages of Lorem Ipsum available
        </h5>
        <div className="mt-5 text-start row">{data}</div>
      </div>
    </div>
  );
};

export default FeaturedItems;
