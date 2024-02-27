import React from 'react'
import { useSearch } from '../Context/Search'
import "../Product/Product.css";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { GiGothicCross } from "react-icons/gi";
const Searchlayout = () => {
    const { searchi } = useSearch()

    const searchresult = searchi.results.map((item) => {
        const { _id } = item;
        return (
            <div key={item._id} className="  card-1 col-lg-4 col-md-6">
                <Link to={`/singlepro/${_id}`}>
                    <div className="cary">
                        <img src={item.image} className="card-img-top img-fluid img-bor" />
                    </div>
                </Link>
                <div className="card-body mt-3">
                    <h5 className="card-title"> Category : {item.category}</h5>
                    <p className="card-text">Brand : {item.brand}</p>
                    <p className="card-text">Price : {item.price}$</p>
                </div>
                <a href="#" className="card-2" onClick={() => handleCardClick(item)}>
                    <FaEye />
                </a>
                <Link to="/cart" className="card-3">
                    <FaShoppingCart />
                </Link>
                <a href="#" className="card-4" onClick={() => handleCardClick(item)}>
                    <FaShuffle />
                </a>
                <a href="#" className="card-5" onClick={() => handleCardClick(item)}>
                    <GiGothicCross />
                </a>
            </div>
        )
    })
    return (
        <div className='container'>
            <div className='text-center'>
                <h1>Search Results</h1>
                <h6>{searchi?.results.length < 1 ? ('No product Found') : (`found ${searchi?.results.length}`)}</h6>
                <div className="container-fluid">
                    <div className="container text-center">

                        <div className="mt-5 text-start row">{searchresult}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchlayout
