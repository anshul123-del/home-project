const jwt = require("jsonwebtoken");
const User = require("../Models/User")
const Authverification = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    

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