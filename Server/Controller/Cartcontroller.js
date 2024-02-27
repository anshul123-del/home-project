const Cart = require("../Models/Cart");

const cartcontroller = {
  addcart: async (req, res) => {
    try {
      const { userid, product } = req.body
      const cartdata = await Cart.create({
        userid: userid,
        product: product

      })
      const cartadded = await cartdata.save()
      res.json({
        message: "data addded in the cart",
        cartadded
      })
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  },

  getusercartdata: async (req, res) => {
    const { id } = req.params.id
    const cartdata = await Cart.findOne({ id })
      .populate({ path: "user", options: { strictPopulate: false } })
      .populate("product.productid");
    res.status(200).json({
      success: true,
      message: cartdata
    })
  },

  //getallcartdata

  getalldata:async(req,res)=>{
        const allcart = await Cart.find({})
        .populate({ path: "user", options: { strictPopulate: false } })
        .populate("product.productid");
        res.status(200).json({
          success:true,
          data:allcart
        })
  },
  deletecart: async(req,res)=>{
        const{_id} = req.body
    try {
      const deletedcart = await Cart.findOneAndDelete({id:_id})
          res.status(200).json({
            message:"data delted",
            deleteddata : deletedcart
          })
    } catch (error) {
        console.log(error)
        res.json(500).json({
          message:error
        })
    }        
  },
};

module.exports = cartcontroller