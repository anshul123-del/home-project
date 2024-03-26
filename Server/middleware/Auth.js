const jwt = require("jsonwebtoken");
const User = require("../Models/User")
const Authverification = async (req, res, next) => {
  try {
    console.log(req.headers)
    const bearerheader = req.headers.authorization;
    const token = bearerheader.split(" ")[1] //Means Split will convert it into array [Bearer,token]so the token and bearer are separated
    console.log("Token", token)
    if (!token) {
      // If no token is provided
      return res.status(401).json({ message: "Unauthorized - No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Unauthorized - Token has expired" });
    }

    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

const isadmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
    if (user.role !== 1) {
      res.status(404).json({
        message: "unAuthorized Access"
      })
    }
    else {
      next()
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { Authverification, isadmin };

// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();
// const secretKey = process.env.SECRET_KEY;

// const verifyToken = (req, res, next) => {
//     // console.log("Headers:", req.headers); // Log all headers to check Authorization header presence and format
//     const bearerheader = req.headers.authorization
//     // console.log("Bearer Token:", bearerheader);
//     const token = bearerheader.split(" ")[1]
//     // console.log("token...", token);
//     if (!bearerheader || !token) return res.status(401).send({
//         auth: false,
//         message: 'No token provided.'
//     })
//     jwt.verify(token, secretKey, (err, decoded) => {
//         if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
//         else {
//             req.decoded = decoded;
//             console.log(req.decoded);
//             next()
//         }
//     });
// }

// module.exports = verifyToken;