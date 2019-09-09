const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Health', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});




let signupschema = new mongoose.Schema({
  Name: String,
 Pass:Number,
 Email:String

})

let login = mongoose.model("login", signupschema)



let Myschema=new mongoose.Schema({
  Url:String,
  Name:String,
 
 
 })
 
 let tipschema=new mongoose.Schema({
   tips:Array
  
  
  })
 
 let Tip=mongoose.model("tip",tipschema)
  
 
 let Diet=mongoose.model("diet",Myschema)
 





module.exports = { login,Tip,Diet }