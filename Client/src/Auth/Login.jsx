import React, { useContext, useState } from "react";
import "../TopComponents/Top.css";
import { Link,  useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Auth.css"
import axios from "axios";
import { Authcontext } from "../Context/AuthContext";
const Login = () => {

  const { auth, setauth } = useContext(Authcontext);
  const navigate = useNavigate()
  const[data,setdata]= useState({
    email:"",
    password:""
  })
  const handlechange = (e)=>{
    const{value,name} = e.target
    setdata({...data,[name]:value})
  }
  const handlesubmit = async(e)=>{
    e.preventDefault()
   const res =  await axios.post(`http://localhost:8050/log`,data)
    setauth({
      ...auth,  
      user: res.data.user,
    });
    console.log(auth)
    localStorage.setItem("auth", JSON.stringify(res.data));
    navigate("/")
    console.log(data)
    
  }
  return (
    <>
      <div className="container-fluid logb p-5">
        <div className="container text-white p-5">
          <div className="row justify-content-center">
            <div className="col-12 shop">
              <h1>LOGIN</h1>
              <Link to="/">HOME</Link>
              <Link to="/login">//LOGIN</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-12 text-center">
            <h1>LOGIN</h1>
          </div>
          <div className="col-12 my-5 ">
            <Form className="log" onSubmit={handlesubmit}>
              <Row className="mb-3 ">
                <div className="col-12">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Username or email Address*</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={data.email} onChange={handlechange} />
                  </Form.Group>
                </div>
                <div className="col-12">               
                     <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password*</Form.Label>
                  <Form.Control type="text" placeholder="Password" name="password" value={data.password} onChange={handlechange} />
                </Form.Group>
                </div>

                <div className="logi col-12  mt-4"><Button type="submit">
                LOGIN
              </Button>
              </div> 
              </Row>
           
            </Form>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
