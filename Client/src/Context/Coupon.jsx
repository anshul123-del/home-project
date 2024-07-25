import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const CouponContext = createContext()
const CouponProvider = ({ children }) => {
    const [coupon, setcoupon] = useState({
        coupons: null
    })
    const baseurl = "http://localhost:8050";
    useEffect(() => {
        const getcoupon = async () => {
            const data = await axios.get(`${baseurl}/coupon/get`)
            const cpdata = data.data.data
            setcoupon({ ...coupon, coupons: cpdata })
            localStorage.setItem("coupon", JSON.stringify(cpdata))
            const ldata = localStorage.getItem("coupon")
        }
        getcoupon()
    }, [])


    return <CouponContext.Provider value={{ baseurl }}>
        {children}
    </CouponContext.Provider>
}

export default CouponProvider