const mongoose = require("mongoose");
const Cartschema = mongoose.Schema(
  {
    userid: { 
      type: mongoose.Schema.Types.ObjectId,
        ref:"user",
      required: true },
    product: [
      {
        productid: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Shoees",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", Cartschema);
module.exports = Cart;
