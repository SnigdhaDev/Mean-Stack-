const prompt= require("prompt-sync")();
var num1=prompt("Enter a number:");
perfect(num1);
function perfect(n){
	var d=0,s=0;
	while(n>0){
		d=n%10;
		s=s+d;
		n=parseInt(n/10);
	}
if  ((s%9)==0){
	console.log("It is a perfect number");
}
else {
	console.log("It is not a perfect number");
}
}