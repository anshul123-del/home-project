const Order = require("../Models/Order")
const ordercontroller = {
  addorder: async (req, res) => {
    try {

      const { product, firstname, lastname, Companyname, Streetaddress, city, district, phone, email } = req.body

      const ordercreated = await Order.create({
        product: product,
        firstname: firstname,
        lastname: lastname,
        Companyname: Companyname,
        Streetaddress: Streetaddress,
        city: city,
        district: district,
        phone: phone,
        email: email

      })
      const ordersaved = await ordercreated.save()
      res.status(200).json({
        message: "order Purchased",
        data: ordersaved
      })

    } catch (error) {
      res.status(200).json({
        message: "error",
        error: error.message,
      });
    }
  },

  getorder: async (req, res) => {
    const orderdata = await Order.find({}).populate("product");
    res.status(200).json({
      message: "Order fetched",
      data: orderdata
    })
  },

  getsingleorder : async(req,res)=>{
       try {
        const{email} = req.params
        const orderdata = await Order.find({email:email}).populate("product");
        console.log(orderdata)
        if(orderdata){
          res.status(200).json({
            message:"your ordered list",
            data:orderdata
          })
        }
       } catch (error) {
        
       }
  }
};
module.exports = ordercontroller