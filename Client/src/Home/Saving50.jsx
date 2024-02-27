import React from 'react'
import divider from "../images/img18.png"
import "./Home.css"
import { useNavigate } from 'react-router-dom'
const Saving50 = () => {
  const navigate = useNavigate()

  return (
    <div className='container-fluid saving '>
        <div className='container text-white p-5'>
        <div className='row align-middle '>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div id='imgbod' >
                    <img src={divider} alt='...' className='img-fluid' ></img>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 pt-5 shops'>
                    <h1 style={{color:"#EB3E32"}}>Saving 50%</h1>
                    <h1>All Online Store</h1>
                    <h3>OFFER AVAILABLE ALL SHOES & PRODUCTS</h3>

                    <button onClick={()=>{navigate("/sideproduct")}}>Shop Now</button>
                </div>
        </div>
        </div>
      
    </div>
  )
}

export default Saving50
