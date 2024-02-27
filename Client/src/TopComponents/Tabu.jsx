import React from 'react'
import "./Top.css"
import { Link } from 'react-router-dom'
const Tabu = () => {
  return (
    <div className='container-fluid'>
    <div className='container p-3 tabu'>
      <div id='tab'>
            <div className='col-lg-1'><Link to="/">Home</Link></div>
            <div className='col-lg-1'><Link to="/about">About</Link></div>
            <div className='col-lg-1'><Link to="/pages">Pages</Link></div>
            <div className='col-lg-1'><Link to="/sideproduct">Shop</Link></div>
            <div className='col-lg-1'><Link to="/Blog">Blog</Link></div>
            <div className='col-lg-1'><Link to="/contact">Contact</Link></div>
      </div>
    </div>
    </div>
  )
}

export default Tabu
