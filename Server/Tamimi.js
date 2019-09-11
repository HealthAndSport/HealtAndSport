
var express = require("express");;
var router= express.Router()

const Tamimi = require("../database/Tamimi");


router.get("/id",(req,res)=>{
   Tamimi.init(() => {
    res.send("This is tamimi server")
    })
})



  //hjfj

module.exports=router;
