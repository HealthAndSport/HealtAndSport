
var express = require("express");;
var router= express.Router()

const Najdawi= require("../database/Najdawi");


router.get("/id",(req,res)=>{
   Najdawi.init(() => {
    res.send("This is  Najdawi server")
    })
})





module.exports=router;