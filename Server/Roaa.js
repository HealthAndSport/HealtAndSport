
var express = require("express");;
var router= express.Router()

const Roaa = require("../database/Roaa");


router.get("/id",(req,res)=>{
   Roaa.init(() => {
    res.send("This is Roaa server")
    })
})





module.exports=router;