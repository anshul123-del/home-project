const mongoose = require("mongoose")

const CouponSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    couponcode: {
        type: String,
        require: true
    },
    discountvalue: {
        type: Number,
        require: true
    },
    expiryDate:{
        type:String,
        require:true
    },
    isExpired:{
        type:Boolean,
        require:true,
        default:false
    }
}, { timestamps: true })
const Coupon = mongoose.model("Coupon", CouponSchema)

module.exports = Coupon