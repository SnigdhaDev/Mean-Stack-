//Inserting many records at a time
const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{
if(err)
console.log("DB not connected");
else
console.log("DB  connected");
});
const ns=new mongoose.Schema({
name:String,
age:Number
});
const nm=new mongoose.model("records",ns);
  nm.insertMany([
{name:'Karthik',age:25,phno:5874162685},
{name:'Anitha',age:36,phno:6214975194},
{name:'Stella',age:21,phno:28749615},
{name:'Teja',age:20,phno:82419641256}
]).then(function(){
console.log("Data Inserted")
}).catch(function(error){
console.log(error)
});