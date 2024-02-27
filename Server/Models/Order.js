const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "user",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
    },
    shippingInfo : {
      address:{type:String,require:true},
      city:{type:String,require:true},
      state:{type:String,require:true},
      country:{type:String,require:true},
      pincode:{type:String,require:true}
    },
    phoneno:{type:String,require:true},
    orderItem:[
      {
        name:{type:String,require:true},
        price:{type:Number,require:true},
        quantity:{type:Number,require:true},
        products: 
          {
            type: mongoose.ObjectId,
            ref: "Products",
          },
      }
    ],
    shippingPrice:{type:String,require:true,default:0},
    totalprice:{type:String,require:true,default:0}
  },
  { timestamps: true }  
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order