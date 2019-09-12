
const db = require('../database');


let init = () => {
    console.log("welcome todatabase")
  }


  let signup=(name,email,password,callback)=>{
    // console.log(Name)
    db.login.create({
      name,
      email,
      password
    },(err,data)=>{
      if(data){
        callback(data)
        console.log(data)
      }
      else
      {
        callback(err)
      }
    })
  }


  let login=(input,callback)=>{
    console.log("Database", input)
    db.login.find(input,(err,data)=>{
      if(data)
      {console.log(data)
        callback(data)
      }
      else
      callback(err)
    })
  }
 
  // signup=(callback,name,email,password=>
  // db.Roaa.create({
  //   name:name,
  //   email:email,
  //   password:password
  // })
  // if(data){
  //   callback(data)
  // }
  // else{
  //   callback(error)
    
  // }
  // )
  
  

module.exports = { 


init,
signup,
login
}

 
