var express=require('express')
var app=express()
app.get('/',function(req,res){
	res.send('This is root path')
})
var s1=app.listen(8080)