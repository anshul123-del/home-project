import React from 'react'
import './Top.css'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Newtabs = () => {
  return (
         <header className="header">
      <div className="container-1 container profec">
        <div className="row bg-change">
        <div className="col-lg-12 d-flex justify-content-center align-items-center">
          <div className="header-item ">
            <div className="menu-overlay"></div>
            <nav className="menu">
              <div className="mobile-menu-head">
                <div className="go-back"><i className="fa fa-angle-left"></i></div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="menu-main">
                <li>
                  <Link to="/" style={{textDecoration:"none"}}>Home</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/about" style={{textDecoration:"none"}}>About </Link>
              
                </li>
                <li className="menu-item-has-children">
                  <Link to="/" style={{textDecoration:"none"}}>Shop <ArrowDropDownIcon/></Link>
                  <div className="sub-menu mega-menu ">
                    <div className="list-item">
                      <ul className='text-start'>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/sideproduct">Sideproduct</Link></li>
                      </ul>
                      </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/blog" style={{textDecoration:"none"}}>Blog <ArrowDropDownIcon/></Link>
                  <div className="sub-menu single-column-menu text-start">
                    <ul>
                      <li><Link to="/Blogdetails">single Post Layout</Link></li>
                      <li><Link to="/Blogsection">Grid Layout</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link style={{textDecoration:"none"}}>Pages <ArrowDropDownIcon/>  </Link>
                  <div className="sub-menu single-column-menu">
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