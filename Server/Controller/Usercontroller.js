const User = require("../Models/User");
const bcrypyt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()
const SECRETKEY = process.env.JWT_SECRET
const Usercontroller = {
  Register: async (req, res) => {
    const { Name, email, password } = req.body;
    if (!(Name && email && password)) {
      res.status(400).json({
        message: "All things Are necessary",
      });
    }
    const exist = await User.findOne({ email });
    const encryptpass = await bcrypyt.hash(password, 10);
    if (exist) {
      res.json({
        message: "User already exist",
      });
    } 
    else {
      const newuser = await User.create({
        Name: Name,
        email: email,
        password: encryptpass,
      });
      const saved = await newuser.save();
      res.status(200).json({

        data: saved,
      });
    }
  },
  Login: async (req, res) => {
    const { email, password } = req.body;
    const match = await User.findOne({ email });

    if (match) {
      const matchpass = await bcrypyt.compare(password, match.password);
      
      if (matchpass) {
          const token  = jwt.sign({_id:match._id},SECRETKEY,{expiresIn:60*60})

        res.status(200).json({
          message: "login successfully",
          user:{
            id:match._id,
            name:match.Name,
            email:match.email,
            role:match.role,
            jwtToken:token
          }
        });
      } else {
        res.status(404).json({
          message: "invalid credentials",
        });
      }
    } else {
      res.status(404).json({
        message: "invalid credentials",
      });
    }
  },

  deletee: async (req, res) => {
    const { _id } = req.body;
    const deleted = await User.deleteOne({ id: _id });
    res.json({
      message: deleted,
    });
  },

  update: async (req, res) => {
    const updatebody = req.body;
    const updated = await User.findByIdAndUpdate(updatebody._id, updatebody);

    res.json({
      message: "updated",
      data: updated,
    });
  },
  getuser : async(req,res)=>{
        const userdata = await User.find({})
        res.status(200).json({
          message:"all users",
          data:userdata
        })
  }
};

module.exports = Usercontroller;
