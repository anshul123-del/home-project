import React from 'react'
import './Top.css'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Newtabs = () => {
  return (
         <header class="header">
      <div class="container-1 container">
        <div class="row bg-change">
        <div className="col-lg-12 d-flex justify-content-center align-items-center">
          <div class="header-item ">
            <div class="menu-overlay"></div>
            <nav class="menu">
              <div class="mobile-menu-head">
                <div class="go-back"><i class="fa fa-angle-left"></i></div>
                <div class="current-menu-title"></div>
                <div class="mobile-menu-close">&times;</div>
              </div>
              <ul class="menu-main">
                <li>
                  <Link to="/" style={{textDecoration:"none"}}>Home</Link>
                </li>
                <li class="menu-item-has-children">
                  <Link to="/about" style={{textDecoration:"none"}}>About </Link>
              
                </li>
                <li class="menu-item-has-children">
                  <Link to="/" style={{textDecoration:"none"}}>Shop <ArrowDropDownIcon/></Link>
                  <div class="sub-menu mega-menu ">
                    <div class="list-item">
                      <ul className='text-start'>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/sideproduct">Sideproduct</Link></li>
                      </ul>
                      </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <Link to="/blog" style={{textDecoration:"none"}}>Blog <ArrowDropDownIcon/></Link>
                  <div class="sub-menu single-column-menu text-start">
                    <ul>
                      <li><Link to="/Blogdetails">single Post Layout</Link></li>
                      <li><Link to="/Blogsection">Grid Layout</Link></li>
                    </ul>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <Link style={{textDecoration:"none"}}>Pages <ArrowDropDownIcon/>  </Link>
                  <div class="sub-menu single-column-menu">
                    <ul>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Register</Link></li>
                      <li><Link to="/sideproduct">Product</Link></li>
                      <li><Link to='/compare'>Compare</Link></li>
                      <li><Link to="/pagenotfound">404 Page</Link></li>
                      <li><Link to='/account'>Account</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link style={{textDecoration:"none"}} to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          </div>
          </div>
      </div>
    </header>

  )
}

export default Newtabs