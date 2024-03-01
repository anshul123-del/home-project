import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./Check.css"
const Success = () => {
  const navigate = useNavigate()
  return (
    <div className='container 'style={{display:'flex',justifyContent:"center",alignItems:"center",height:"60vh"}}>
            <div className='succ' >
              <Card className='p-5 bg-success' >
                <Card.Body> 
              <h1 className='text-center gt'><CheckCircleIcon style={{fontSize:"70px", color:"white"}}/></h1>  
              <h2 className='text-white my-4 text-center'>Transcation Completed Successfully</h2>
              <h3 className='text-center text-white'>Thankyou for billing</h3>
              </Card.Body>
              </Card>
              <Button className='mt-3 p-3' variant='secondary' onClick={()=>{navigate('/')}}>Continue for Shopping</Button>

            </div>
            
            
    </div>
  )
}

export default Success
