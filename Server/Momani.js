
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


router.put("/chat/:post",(req,res)=>{
  let post=req.params.post
  Momani.addpost(post,result=>{
    res.json(result)
  })
})

router.put("/newcomment/:comment/:id",(req,res)=>{
let comment=req.params.comment
let id=req.params.id
Momani.addcomment(comment,id,result=>{
  res.json(result)
})
})

router.get("/get",(req,res)=>{
  Momani.getpost(result=>{
    res.json(result)
  })
  })

module.exports=router;