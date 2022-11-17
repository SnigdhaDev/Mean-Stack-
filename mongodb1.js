const express=require('express');//Step-1:Importing libraries
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{//Stelp-2:Connecting to DB
if(err)
console.log("DB not connected");
else
console.log("DB  connected");
});
const ns=new mongoose.Schema({//Step-3:Creating Schema(Structure)
name:String,
age:Number
});
const nm=new mongoose.model("records",ns);//Step-4:Creating  model object
const data1=new nm({name:'Snigdha',age:19,phno:1234566879});//Step-5:inserting data
data1.save();
const data2=new nm({name:'Dev',age:17,phno:987654321});
data2.save();
const data3=new nm({name:'Charan',age:19,phno:65487255814});
data3.save();
const data4=new nm({name:'Hyma',age:18,phno:27538268376});
data4.save();
const data5=new nm({name:'Hari',age:20,phno:85199209563});
data5.save();