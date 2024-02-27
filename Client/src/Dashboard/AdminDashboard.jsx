import React from 'react'
import Sideboard from './Sideboard'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
    return (
        <div>
            <div className="container-fluid padd-6">
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-sm-12">
                        <div>
                            <Sideboard />
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-10 col-sm-12">
                        <div className='mt-5'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
