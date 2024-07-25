import React from 'react'
import Img1 from '../images/domino-164_6wVEHfI-unsplash.jpg'
import Img2 from '../images/img2.jpg'
import Img3 from '../images/wishlist.jpg'
import './Home.css'

const Imagesec = () => {
  return (
    <div className="container mar-top-bottom">
        <div className="row">
            <div className="col-md-4  my-4">
                <div className='pos'>
                    <p className='abs'>Sports Shoes</p> 
                    <img src={Img1} alt="" className='img-fluid shoes-img img-thumbnail' />
                 
                </div>
            </div>
            <div className="col-md-4 my-4">
            <div className='pos'>
                <p className='abs'> Latest Shoes</p>
                    <img src={Img2} alt="" className='img-fluid shoes-img img-thumbnail' />
                </div>
            </div>
            <div className="col-md-4  my-4">
            <div className='pos'>
            <p className='abs'> Office Shoes</p>
                    <img src={Img3} alt="" className='img-fluid shoes-img img-thumbnail' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Imagesec