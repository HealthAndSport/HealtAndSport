
var express = require("express");;
var router= express.Router()

const Momani= require("../database/Momani");


router.get("/id",(req,res)=>{
  Momani.init(() => {
    res.send("This is  Momani server")
    })
})





module.exports=router;