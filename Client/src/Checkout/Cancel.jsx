import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';
import "./Check.css";
const Cancel = () => {
  const navigate = useNavigate()
  return (
    <div className='container can ' style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "60vh" }}>
      <div className='cans'>
        <Card className='p-5 bg-danger ' >
          <Card.Body>
            <h1 className='text-center gt '><CancelIcon style={{ fontSize: "70px", color: "white" }} /></h1>
            <h1 className='text-white my-4text-center'>Your Last Transcation is Cancelled</h1>
            <h3 className='text-center text-white'>Try Again</h3>
          </Card.Body>
        </Card>
        <Button className='mt-3 p-3' variant='secondary' onClick={() => { navigate('/') }}>Continue for Shopping</Button>

      </div>


    </div>
  )
}

export default Cancel
