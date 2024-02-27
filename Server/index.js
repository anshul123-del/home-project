const express = require("express")
const app = express()
const path = require('path');
const cors = require("cors")
const mongoose = require("mongoose")
const route = require("./routes/Routes")
const dotenv = require("dotenv").config()
const port = process.env.port || 8002
const dburl = process.env.dburl
mongoose.connect(dburl).then((res)=>console.log("database connected")).catch((error)=>console.log(error))
app.use('/uploads', express.static(path.join(__dirname, './images/uploads')));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(route)
app.listen(port,()=>console.log("Running..."))
