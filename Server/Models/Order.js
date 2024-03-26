const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    product: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shoees"
    }],
    firstname: {
      type: String,
      require: true
    },
    lastname: {
      type: String,
      require: true
    },
    Companyname: {
      type: String,
      require: true
    },
    Streetaddress: {
      type: String,
      require: true
    },
    country: {
      type: String,
      require: true
    },
    city: {
      type: String,
      require: true
    },
    district: {
      type: String,
      require: true
    },
    postalcode: {
      type: String,
    },
    phone: {
      type: String,

    },
    email: {
      type: String,
      require: true
    },

    Date: {
      type: String,
      default: new Date(Date.now()).toLocaleDateString()
    },
    Status: {
      type: String, 
      default: () => {
          const date = new Date();
          date.setDate(date.getDate()+7);
          return date.toLocaleDateString(); 
      }
  }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order