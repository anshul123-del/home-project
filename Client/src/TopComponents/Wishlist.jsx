import React from "react";
import "./Top.css";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import shoe1 from "../images/domino-164_6wVEHfI-unsplash.jpg";
import { Button, Table } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Wishlist = () => {
  const{wishlist,setwishlist} = useContext(CartContext)
  const{carti,setcarti} = useContext(CartContext)

    const handledelete = (pid)=>{
        const delteddata = wishlist.filter((ele,ind)=> pid!==ind)
          setwishlist(delteddata)
          localStorage.setItem("wishlist",JSON.stringify(delteddata))
    }
  const navigate = useNavigate()
  return (
    <>
      <div className="container-fluid wishlis text-center p-5">
        <div className="container text-white p-5">
          <div className="col-12 shopsy" data-aos="fade-down">
            <h1>WISHLIST</h1>
            <Link to="/" className="ha">HOME</Link>
            <Link to="/wishlist"  className="ha">//WISHLIST</Link>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row align-middle">
          <div className="col-sm-12 p-5">
            <Table responsive>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Stock Status</th>
                  <th scope="col">Price</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                
                {
                  wishlist.map((item,ind)=>{
                    return(
                      <tr key={item._id}>
                  <th scope="row" className="align-middle">
                   <button className="del" onClick={()=>{
                    handledelete(ind)
                   }}><MdDelete /></button> 
                  </th>
                  <td className="align-middle">
                    <img
                      src={item.image}
                      alt="..."
                      className="rounded img-fluid"
                      style={{ width: "100px" }}
                    ></img>
                      {item.category}
                  </td>
                  <td className="align-middle"><button className="left" variant="success">{item.items_left} items are left</button></td>
                  <td className="align-middle">${item.price}</td>
                  <td className="wishc align-middle"><button  onClick={()=>{navigate("/cart")}}><Link  onClick={()=>{
                            setcarti([...carti,item])
                            localStorage.setItem("cart",JSON.stringify([...carti,item]))
                            
                  }} >Add to Cart</Link></button></td>
                </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
