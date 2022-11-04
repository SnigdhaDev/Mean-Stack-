var express=require('express')
var app=express()
app.get('/',function(req,res){
	res.send("Hello LBRCE!")
})
app.get('/cse',function(req,res){
	res.send("Hello CSE !")
})
app.get('/IT',function(req,res){
	res.send("Hello IT !")
})
app.get('/Mech',function(req,res){
	res.send("Hello Mech!")
})
app.get('/AIDS',function(req,res){
	res.send("Hello AIDS!")
})
var server=app.listen(8090)
console.log("Running....")