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
//deleteOne-deletes first occurrence of similar records
//delete-deletes whole table
nm.deleteOne({age:20}).then(function(){
console.log("Data deleted")
}).catch(function(error){
console.log(error)
});