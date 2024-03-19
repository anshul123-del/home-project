import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Authcontext } from '../Context/AuthContext'
import axios from 'axios'

const Order2 = () => {
  const { auth, baseurl } = useContext(Authcontext)
  const email = auth?.user?.email
  const [order, setorder] = useState([])
  const [orderitem, setorderitem] = useState([])
  const handlesingleorder = async () => {
    const data = await axios.get(`${baseurl}/get/singleuser/${email}`)
    setorder(data.data.data)
    setorderitem(data.data.data.product)
  }
  useEffect(() => {
    handlesingleorder()
  }, [])
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className='dashboard'>
            <h4 className="order-add">Orders</h4>
            <hr />
            <Table responsive bordered>
              <thead>
                <tr className='das-font-2'>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  order.map((data,ind) => {
                    return (
                      <tr className='das-font-3'>                        
                      <td>{ind+1}</td>
                      <td>{data.Date}</td>
                      <td>{data.Date === data.Status?" Deliverd ✔️":`order will be deliverd on ${data.Status}`}</td>
                        <td>{data.city}</td>
                        <td>{data.Companyname}</td>
                        <td>View</td>
                      </tr>
                    )
                  })
                }

              </tbody>

            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order2