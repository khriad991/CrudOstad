// import pakages dependancy
    const express = require('express')
    const  router =require("./src/Router/api")
    const app = new express()
    const bodyParser = require("body-parser")

// cecurity middleWare import
    const  reteLimit = require("express-rate-limit")
    const  helmet= require("helmet")
    const  mongoSanitze= require("express-mongo-sanitize")
    const  xss= require("xss-clean")
    const  hpp= require("hpp")
    const  cors= require("cors")

// Security middleWare implement ---->>>
    app.use(cors())
    app.use(helmet())
    app.use(mongoSanitze())
    app.use(xss())
    app.use(hpp())

// Body parser Implement
    app.use(bodyParser.json())

// Request rate limit
    const limit = reteLimit({windowMs:15*60*1000, max:3000})
    app.use(limit)

// mongoDB Database Connection
const mongoose = require('mongoose')
const path = require("path");
app.use(express.static("client/build"))

    let URL= "mongodb+srv://<username>:<password>@cluster0.am8jyr5.mongodb.net/CRUD?retryWrites=true&w=majority";
    let OPTION = {user:"testcrud991",pass:"testcrud991",autoIndex:true}
mongoose.connect(URL,OPTION,(err)=>{
    console.log("DataBase Connet bd")
    console.log(err)
})

// Routing Implement
    app.use("/api/v1",router)

// BackEnd implement ---->>>

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client", "build","index.html"))
    })
module.exports= app









