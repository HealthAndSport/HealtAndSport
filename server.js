
var express = require("express");
const cors = require('cors');
const app =express()
const Tamimi=require("./Server/Tamimi")
const Roaa=require("./Server/Roaa")
const Najdawi=require("./Server/Najdawi")
const Momani=require("./Server/Momani")


app.use(cors());
app.use(express.json())
app.use("/Tamimi",Tamimi);
app.use("/Roaa",Roaa);
app.use("/Najdawi",Najdawi);
app.use("/Momani",Momani);


const PORT =  process.env.PORT|| 9000;



app.listen(PORT, () => console.log(`Server listening to ${PORT}`));


