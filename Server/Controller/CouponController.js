const Coupon = require("../Models/Coupon")

const CouponController = {
    addcoupon: async (req, res) => {
        try {
            const { name, couponcode, discountvalue } = req.body
            if (!(name && couponcode && discountvalue)) {
                res.status(400).json({
                    message: 'all things are required to make a coupon'
                })
            } else {
                const createcoupon = await Coupon.create({
                    name: name,
                    couponcode: couponcode,
                    discountvalue: discountvalue
                })
                const couponsave = await createcoupon.save()
                res.status(200).json({
                    success: true,
                    message: "coupon created successfully",
                    coupon: couponsave
                })
            }

        } catch (error) {
            res.status(500).json({
                message: "server problem",
            })
        }

    },

    getcoupon: async (req, res) => {
        try {
            const data = await Coupon.find()
            res.status(200).json({
                data: data
            })
        }
        catch (error) {
            res.status(500).json({
                message: 'server error',
                error: error
            })
        }
    },

    getCouponByCode: async (req, res) => {
        const {CouponCode } = req.body
       
        try {
            const data = await Coupon.find({ couponcode: CouponCode})
            return res.status(200).json(data)
        }
        catch (err) {

        }
    }
}
module.exports = CouponController