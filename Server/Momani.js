
var express = require("express");;
var router= express.Router()

const Momani= require("../database/Momani");

router.get("/id",(req,res)=>{
  Momani.init(() => {
    res.send("This is  Momani server")
    })
})

router.get("/diet/:Name",(req,res)=>{
  let Name=req.params.Name
Momani.DietName(Name,(result) =>{
  res.json(result)
})
})

router.get("/tips",(req,res)=>{
  Momani.Gettips(result=>{
    res.json(result)
  })
})




module.exports=router;