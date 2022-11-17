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
const data6=new nm({name:'Sanju',age:18,phno:4979920953});
data6.save();
const old={name:/^S/};//updates age of all the names starting with 'S'
const new1={age:16};
let doc=nm.updateMany(old,new1,(err)=>{
if(err){
console.log(err);
}
else{
console.log("updated");
}
});
