import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./Coupon.css"
import axios from 'axios';
import { CouponContext } from '../Context/Coupon';

function CreateCoupon() {
  const{baseurl} = useContext(CouponContext)
  const [coupon, setcoupon] = useState({
    name: "",
    couponcode: "",
    discountvalue: ""
  })
  const handlechange = (e) => {
    const { name, value } = e.target
    setcoupon({ ...coupon, [name]: value })
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
  axios.post(`${baseurl}/coupon/create`,coupon)
  }
  return (
    <div className='container'>
      <div className='cop'>
        <h2>Create your Coupon</h2>
        <Form onSubmit={handlesubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Copun name" value={coupon.name} name='name' onChange={handlechange}  autoComplete='off'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Coupon Code</Form.Label>
            <Form.Control type="text" placeholder="Enter you Coupon Code" value={coupon.couponcode} name='couponcode' onChange={handlechange} autoComplete='off'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Discount Value</Form.Label>
            <Form.Control type="number" placeholder="Enter you Discount Value" value={coupon.discountvalue} name='discountvalue' onChange={handlechange} autoComplete='off'/>
          </Form.Group>

          <Button variant='success' type='submit'>Create a Coupon</Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateCoupon;
