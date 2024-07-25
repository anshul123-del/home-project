import React, { useState } from "react";
import "../TopComponents/Top.css";
import { Link, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
import "./Auth.css";
import { Shoecont } from "../Context/Context";
const Register = () => {
  const{baseurl} = Shoecont()
  const [data, setdata] = useState({
    Name: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate()
  const handlechange = (e)=>{
        const{value,name} = e.target
        setdata({...data,[name]:value})
    }

    const handlesubmit = async(e)=>{
      e.preventDefault()
     await axios.post(`http://localhost:8050/register`,data).then((res)=>console.log(res))
      console.log(data)

    }
  return (
    <>
      <div className="container-fluid logb  p-5">
        <div className="container text-white p-5">
          <div className="row justify-content-center">
            <div className="col-12 shop " data-aos="fade-down">
              <h1>REGISTER</h1>
              <Link to="/">HOME</Link>
              <Link to="/register">//REGISTER</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-12 text-center">
            <h1>REGISTER</h1>
          </div>
          <div className="col-12 my-5 w-70 ">
            <Form className="reg" onSubmit={handlesubmit} >
              <Row className="mb-3 ">
                <div className="col-12">
                  <Form.Group as={Col}>
                    <Form.Label>Username* </Form.Label>
                    <Form.Control type="text" autoComplete="off" value={data.Name} name="Name" onChange={handlechange}/>
                  </Form.Group>
                </div>
                <div className="col-12">
                  <Form.Group as={Col}>
                    <Form.Label> email Address*</Form.Label>
                    <Form.Control type="email" autoComplete="off" value={data.email} name="email"  onChange={handlechange}/>
                  </Form.Group>
                </div>
                <div className="col-12">
                  <Form.Group as={Col}>
                    <Form.Label>Password*</Form.Label>
                    <Form.Control type="text" autoComplete="off" value={data.password} name="password"  onChange={handlechange}/>
                  </Form.Group>
                </div>

                <div className="logi col-12  mt-4">
                  <button type="submit" onClick={()=>{navigate("/")}}>REGISTER</button>
                </div>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
