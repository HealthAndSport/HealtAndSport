
var express = require("express");;
var router= express.Router()

const Roaa = require("../database/Roaa");


router.get("/id",(req,res)=>{

    res.json("This is Roaa server")
   
})

router.post('/:name/:email/:password',(req,res)=>{
   let  name =req.params.name
   let  email =req.params.email
   let  password=req.params.password
//     console.log(name)
//     console.log(email)
    // console.log(password)
    Roaa.signup(name,email,password,(result)=>{
  res.json(result)
    } )
    // res.json('the server')
})

router.post('/login',(req,res)=>{
    let  input = req.body
    console.log("ServerLogin",req.body)
  
    Roaa.login(input,(result)=>{
        res.json(result)
    })
})



module.exports=router;