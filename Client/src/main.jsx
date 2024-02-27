import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Shoecontextpro from "./Context/Context.jsx";
import Cartpro from "./Context/CartContext.jsx";
import Authprovider from "./Context/AuthContext.jsx";
import { Searchprovider } from "./Context/Search.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Shoecontextpro>
    <Cartpro>
     <Authprovider>
      <Searchprovider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
        </Searchprovider>
        </Authprovider>
    </Cartpro>
  </Shoecontextpro>
);
