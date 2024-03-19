import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Shoecontextpro from "./Context/Context.jsx";
import Cartpro from "./Context/CartContext.jsx";
import Authprovider from "./Context/AuthContext.jsx";
import { Searchprovider } from "./Context/Search.jsx";
import CouponProvider from "./Context/Coupon.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Shoecontextpro>
    <Cartpro>
      <Authprovider>
        <Searchprovider>
          <CouponProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </CouponProvider>
        </Searchprovider>
      </Authprovider>
    </Cartpro>
  </Shoecontextpro>
);
