import React, { Suspense } from 'react'
import "./App.css";
import Topnav from "./TopComponents/Topnav";
import "bootstrap/dist/css/bootstrap.min.css";
import Seearch from "./TopComponents/Seearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Tabu from "./TopComponents/Tabu";
import Footerr from "./TopComponents/Footerr";
import "react-multi-carousel/lib/styles.css";
import Home from "./Home/Home";
const Wishlist = React.lazy(()=>import("./TopComponents/Wishlist"))
const Cart = React.lazy(()=>import("./Cart/Cart"))
const Login = React.lazy(()=>import("./Auth/Login"))
const Register = React.lazy(()=>import("./Auth/Register"))
const Checkout = React.lazy(()=>import("./Checkout/Checkout"))
const Aboutus = React.lazy(()=>import("./About/About"))
const Contact = React.lazy(()=>import("./Contact/Contact"))
const Blogsection = React.lazy(()=>import("./Blog/Blogsection"))
const Compare = React.lazy(()=>import("./Compare/Compare"))
const Blogdetails = React.lazy(()=>import("./Blog/Singleblog/Blogdetails"))
const Pagenot = React.lazy(()=>import("./404/Pagenot"))
const Account = React.lazy(()=>import("./Account/Account"))
const Dashboard = React.lazy(()=>import("./Account/Dashboard"))
const Product = React.lazy(()=>import("./Product/Product"))
const ProductGrid = React.lazy(()=>import("./Product/ProductGrid"))
const Productlist = React.lazy(()=>import("./Product/Productlist"))
const Sideproduct = React.lazy(()=>import("./Product/SIdeproduct"))
const Accountdetails = React.lazy(()=>import("./Account/Acountdetails"))
const Order2 = React.lazy(()=>import("./Account/Order2"))
const Download = React.lazy(()=>import("./Account/Download"))
const Payment = React.lazy(()=>import("./Account/Payment"))
const Address = React.lazy(()=>import("./Account/Address"))
const Singleproduct = React.lazy(()=>import("./Product/singleproduct/Singleproduct"))
const Nav2 = React.lazy(()=>import("./TopComponents/Nav2"))
const Newtabs = React.lazy(()=>import("./TopComponents/Newtab"))
const Searchlayout = React.lazy(()=>import("./TopComponents/Searchlayout"))

const AdminDashboard = React.lazy(()=>import("./Dashboard/AdminDashboard"))
const Allusers = React.lazy(()=>import("./Dashboard/Allusers"))
const CreateProduct = React.lazy(()=>import("./Dashboard/CreateProduct"))
const Success = React.lazy(()=>import("./Checkout/Success"))
const Cancel = React.lazy(()=>import("./Checkout/Cancel"))
// import Addtocart from "./Cart/Addtocart";
// import Productlisting from "./Product/Productlisting";
function App() {
  return (
    <>
      <Router>
        <Topnav />
        <Seearch />
        <Newtabs />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Suspense fallback={<div>Loading...</div>}><Searchlayout /></Suspense>}></Route>
          <Route path="/wishlist" element={<Suspense fallback={<div>Loading...</div>}><Wishlist /></Suspense>}></Route>
          <Route path="/cart" element={<Suspense fallback={<div>Loading...</div>}><Cart /></Suspense>}></Route>
          <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>}></Route>
          <Route path="/register" element={<Suspense fallback={<div>Loading...</div>}><Register /></Suspense>}></Route>
          <Route path="/checkout" element={<Suspense fallback={<div>Loading...</div>}><Checkout /></Suspense>}></Route>
          <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><Aboutus /></Suspense>}></Route>
          <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>}></Route>
          <Route path="/Blogsection" element={<Suspense fallback={<div>Loading...</div>}><Blogsection /></Suspense>}></Route>
          <Route path="/Blogdetails" element={<Suspense fallback={<div>Loading...</div>}><Blogdetails /></Suspense>}></Route>
          <Route path="/compare" element={<Suspense fallback={<div>Loading...</div>}><Compare /></Suspense>}></Route>
          <Route path="/pagenotfound" element={<Suspense fallback={<div>Loading...</div>}><Pagenot /></Suspense>}></Route>
          <Route path="/singlepro/:_id" element={<Suspense fallback={<div>Loading...</div>}><Singleproduct /></Suspense>}></Route>
          <Route path="/success" element={<Suspense fallback={<div>Loading...</div>}><Success /></Suspense>}></Route>
          <Route path="/cancel" element={<Suspense fallback={<div>Loading...</div>}><Cancel /></Suspense>}></Route>

          {/* Account Section */}
          <Route path="/account" element={<Suspense fallback={<div>Loading...</div>}><Account /></Suspense>}>
            <Route path="dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>}></Route>
            <Route path="accountdetails" element={<Suspense fallback={<div>Loading...</div>}><Accountdetails /></Suspense>} />
            <Route path="successfull" element={<Suspense fallback={<div>Loading...</div>}><Order2 /></Suspense>} />
            <Route path="downloads" element={<Suspense fallback={<div>Loading...</div>}><Download /></Suspense>} />
            <Route path="payment" element={<Suspense fallback={<div>Loading...</div>}><Payment /></Suspense>} />
            {/* <Route path="logout" element={<Login />} /> */}
            <Route path="addresspayment" element={<Suspense fallback={<div>Loading...</div>}><Address /></Suspense>} />
            <Route path="" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
          </Route>

          {/* Product Section */}
          <Route path="/product" element={<Suspense fallback={<div>Loading...</div>}><Product /></Suspense>}>
            <Route path="" element={<Suspense fallback={<div>Loading...</div>}><ProductGrid /></Suspense>}></Route>
            <Route path="grid" element={<Suspense fallback={<div>Loading...</div>}><ProductGrid /></Suspense>}></Route>
            <Route path="list" element={<Suspense fallback={<div>Loading...</div>}><Productlist /></Suspense>}></Route>
          </Route>


          {/* Sideproduct */}
          <Route path="/sideproduct" element={<Suspense fallback={<div>Loading...</div>}><Sideproduct /></Suspense>}>
            <Route path="" element={<Suspense fallback={<div>Loading...</div>}><ProductGrid /></Suspense>}></Route>
            <Route path="grid" element={<Suspense fallback={<div>Loading...</div>}><ProductGrid /></Suspense>}></Route>
            <Route path="list" element={<Suspense fallback={<div>Loading...</div>}><Productlist /></Suspense>}></Route>
          </Route>
          <Route path="/nav" element={<Suspense fallback={<div>Loading...</div>}><Nav2 /></Suspense>}></Route>



          {/* Admin */}
          <Route path="/Admin" element={<Suspense fallback={<div>Loading...</div>}><AdminDashboard /></Suspense>}>
            <Route path="" element={<Suspense fallback={<div>Loading...</div>}><Allusers /></Suspense>}></Route>
            <Route path="dashboard" element={<Suspense fallback={<div>Loading...</div>}><Allusers /></Suspense>}></Route>
            <Route path="grid" element={<Suspense fallback={<div>Loading...</div>}><ProductGrid /></Suspense>}></Route>
            <Route path="accountdetails" element={<Suspense fallback={<div>Loading...</div>}><Accountdetails /></Suspense>} />
            <Route path="successfull" element={<Suspense fallback={<div>Loading...</div>}><Order2 /></Suspense>} />
            <Route path="downloads" element={<Suspense fallback={<div>Loading...</div>}><Download /></Suspense>} />
            <Route path="payment" element={<Suspense fallback={<div>Loading...</div>}><Payment /></Suspense>} />
            <Route path="accountdetails" element={<Suspense fallback={<div>Loading...</div>}><Allusers /></Suspense>}></Route>
            <Route path="addproduct" element={<Suspense fallback={<div>Loading...</div>}><CreateProduct /></Suspense>}></Route>
          </Route>
        </Routes>


        <Footerr />
      </Router>
    </>
  );
}

export default App;
