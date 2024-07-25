import React from 'react'
import Sideaccount from './Sideaccount'
import { Link, Outlet } from 'react-router-dom'

const Account = () => {
  return (
<>    
<div className="container-fluid acce text-center p-5">
        <div className="container text-white p-5">
          <div className="col-12 sho" data-aos="fade-down">
            <h1 >ACCOUNT PAGE</h1>
            <Link to="/">HOME</Link>
            <Link to="/login">//ACCOUNT</Link>
          </div>
        </div>
      </div>
   <div className="container-fluid ">
    <div className="row justify-content-center p-4">
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div>
                <Sideaccount/>
            </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8">
            <div className='mt-5'>
                <Outlet/>
            </div>
        </div>
    </div>
   </div>
   </>

  )
}

export default Account