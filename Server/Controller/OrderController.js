const mongoose = require("mongoose");
const Order = require("../Models/Order")
const ordercontroller = {
  addorder: async (req, res) => {
    try {

      const { payment, buyer, status, shippingInfo, phoneno, orderItem, shippingPrice, totalprice } = req.body

      const ordercreated = await Order.create({
        payment: payment,
        buyer: buyer,
        status: status,
        shippingInfo: shippingInfo,
        phoneno: phoneno,
        orderItem: orderItem,
        shippingPrice: shippingPrice,
        totalprice: totalprice,
      })
      const ordersaved = await ordercreated.save()
      res.status(200).json({
        message: "order Purchased",
        data: ordersaved
      })
      
    } catch (error) {
      res.status(200).json({
        message: "error",
        error: error,
      });
    }
  },
};
module.exports = ordercontroller