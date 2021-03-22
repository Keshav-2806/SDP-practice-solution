/*const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());
mongoose
.connect("monodb://localhost:27017/post",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("Connected to mongoDB"))
.catch((err)=>console.log(err));
const PORT =3000;
app.listen(PORT,()=>console.log("Server started"));
*/
let express=require('express')
let app=express()
app.get('/',function(req,res){
    res.send('Hello Sir')

})