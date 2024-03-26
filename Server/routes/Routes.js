const cartcontroller = require("../Controller/Cartcontroller");
const productcontroller = require("../Controller/Productcontroller");
const Usercontroller = require("../Controller/Usercontroller");
const upload = require("../middleware/multer_middileware")

const { Authverification, isadmin } = require('../middleware/Auth');
const ordercontroller = require("../Controller/OrderController");
const PaymentController = require("../Controller/Paymentcontroller");
const CouponController = require("../Controller/CouponController");
const route = require("express").Router();

//User Route
route.post("/register", Usercontroller.Register);
route.post("/log", Usercontroller.Login);
route.post("/del", Authverification, isadmin, Usercontroller.deletee);
route.post('/user/update', Usercontroller.update)
route.get('/get', Authverification, isadmin, Usercontroller.getuser)


//Product Route         
route.post("/upload", upload.single('image'), productcontroller.addproduct)
route.get("/getproduct", productcontroller.initialdata);
route.get("/singledata/:id", productcontroller.oneproduct);
route.post("/setdel", productcontroller.deleproduct);
route.get("/search/:keyword", productcontroller.searchproduct);

//cart route
route.post("/addcart", cartcontroller.addcart)
route.get("/getcart/:id", cartcontroller.getusercartdata)
route.get("/getallcart", cartcontroller.getalldata)
route.post("/delcart/", cartcontroller.deletecart)
//Order Route
route.post("/order", ordercontroller.addorder)
route.get("/getorder", ordercontroller.getorder)
route.get("/get/singleuser/:email", ordercontroller.getsingleorder)

//Payment route
route.post("/create-checkout-session", PaymentController.makepayment)
route.get("/payment/list", PaymentController.getpayment)


//Coupon created
route.post("/coupon/create", CouponController.addcoupon)
route.get("/coupon/get", CouponController.getcoupon)
route.post("/coupon/getcoupon", CouponController.getCouponByCode)

module.exports = route;
