import React from 'react'
import Img7 from '../images/img1.jpg'
import Img8 from '../images/img19.jpg'
import Img9 from '../images/img2.jpg'
import { SlCalender } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";
import './About.css'
import { Link } from 'react-router-dom';


const Blog = () => {

    const items=[
        {
            id:1,
            image:Img7,
            des:"The global Footwear market is predicted to witness a revenue of US$412.90bn in 2024, with an annual growth rate of 3.43% (CAGR 2024-2028)."
        },
        {
            id:2,
            image:Img8,
            des:"The global Footwear market is predicted to witness a revenue of US$412.90bn in 2024, with an annual growth rate of 3.43% (CAGR 2024-2028)."
        },
        {
            id:3,
            image:Img9,
            des:"The global Footwear market is predicted to witness a revenue of US$412.90bn in 2024, with an annual growth rate of 3.43% (CAGR 2024-2028)."
        }
    ]
  return (
    <div className="container-fluid padd-3 mar-top-bottom">
      <center><h1 className='font-dis-fea'>Latest Blogs</h1></center>
      <center><p className='font-dis-fea-2'> Lorem ipsum dolor ametcons adipisicing elit sed</p></center>
      <div className="row">
        {items.map((i)=>{
        return(

            <div key={i.id} className="col-md-6 col-lg-4 col-sm-12 ">
              <div>
              <div className='img-wrapper mt-4'>
                  <img src={i.image} alt="" className='img-fluid inner-img' />
                  </div>
                  <div className='dis-blog'>
                   <div className='dis-blog-2'>
                   <p><SlCalender className='text-danger' /></p>
                    <p>24/feb/2024</p>
                   </div>
                   <div className='dis-blog-2'>
                   <p><IoPersonSharp className='text-danger'/></p>
                   <p>username</p>
                   </div>
                  </div>
                  <p className='bn-font'>{i.des}</p>

                  <Link to="/singleblog" className='bn-cl'>Read more</Link>
            </div>
            </div>

        )
    })}
      </div>
    </div>
  )
}

export default Blog