import "./App.css";
import Topnav from "./TopComponents/Topnav";
import "bootstrap/dist/css/bootstrap.min.css";
import Seearch from "./TopComponents/Seearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tabu from "./TopComponents/Tabu";
import Footerr from "./TopComponents/Footerr";
import "react-multi-carousel/lib/styles.css";

import Home from "./Home/Home";
import Wishlist from "./TopComponents/Wishlist";
import Cart from "./Cart/Cart";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Checkout from "./Checkout/Checkout";
import Aboutus from "./About/About";
import Contact from "./Contact/Contact";
import Blogsection from "./Blog/Blogsection";
import Compare from "./Compare/Compare";
import Blogdetails from "./Blog/Singleblog/Blogdetails";
import Pagenot from "./404/Pagenot";
import Account from "./Account/Account";
import Dashboard from "./Account/Dashboard";
import Product from "./Product/Product";
import ProductGrid from "./Product/ProductGrid";
import Productlist from "./Product/Productlist";
import Sideproduct from "./Product/SIdeproduct";
import Accountdetails from "./Account/Acountdetails";
import Order2 from "./Account/Order2";
import Download from "./Account/Download";
import Payment from "./Account/Payment";
import Address from "./Account/Address";
import Singleproduct from "./Product/singleproduct/Singleproduct";
import Nav2 from "./TopComponents/Nav2"
import Newtabs from "./TopComponents/Newtab";
import Searchlayout from "./TopComponents/Searchlayout";
import Admin from "./Dashboard/Admin";
import AdminDashboard from "./Dashboard/AdminDashboard";
import Allusers from "./Dashboard/Allusers";
import CreateProduct from "./Dashboard/CreateProduct";
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
          <Route path="/search" element={<Searchlayout />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Blogsection" element={<Blogsection />}></Route>
          <Route path="/Blogdetails" element={<Blogdetails />}></Route>
          <Route path="/compare" element={<Compare />}></Route>
          <Route path="/pagenotfound" element={<Pagenot />}></Route>
          <Route path="/singlepro/:_id" element={<Singleproduct />}></Route>

          {/* Account Section */}
          <Route path="/account" element={<Account />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="accountdetails" element={<Accountdetails />} />
            <Route path="successfull" element={<Order2 />} />
            <Route path="downloads" element={<Download />} />
            <Route path="payment" element={<Payment />} />
            {/* <Route path="logout" element={<Login />} /> */}
            <Route path="addresspayment" element={<Address />} />
            <Route path="" element={<Dashboard />} />
          </Route>

          {/* Product Section */}
          <Route path="/product" element={<Product />}>
            <Route path="" element={<ProductGrid />}></Route>
            <Route path="grid" element={<ProductGrid />}></Route>
            <Route path="list" element={<Productlist />}></Route>
          </Route>


          {/* Sideproduct */}
          <Route path="/sideproduct" element={<Sideproduct />}>
            <Route path="" element={<ProductGrid />}></Route>
            <Route path="grid" element={<ProductGrid />}></Route>
            <Route path="list" element={<Productlist />}></Route>
          </Route>
          <Route path="/nav" element={<Nav2 />}></Route>



          {/* Admin */}
          <Route path="/Admin" element={<AdminDashboard />}>
            <Route path="" element={<Allusers />}></Route>
            <Route path="dashboard" element={<Allusers />}></Route>
            <Route path="grid" element={<ProductGrid />}></Route>
            <Route path="accountdetails" element={<Accountdetails />} />
            <Route path="successfull" element={<Order2 />} />
            <Route path="downloads" element={<Download />} />
            <Route path="payment" element={<Payment />} />
            <Route path="accountdetails" element={<Allusers />}></Route>
            <Route path="addproduct" element={<CreateProduct />}></Route>
          </Route>
        </Routes>


        <Footerr />
      </Router>
    </>
  );
}

export default App;
