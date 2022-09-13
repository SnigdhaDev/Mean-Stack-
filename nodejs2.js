//dynamic reading of values using prompt
//const readline = require("readline-sync");
//let n = Number(readline.question("Enter n value:"));
//console.log("n value is:%d",n);
const prompt= require("prompt-sync")();//to execute this we need to install a package called prompt(npm install prompt-sync)
const num1=prompt("Enter first number:");
console.log("first number is:%d  ",num1);
const num2=prompt("Enter second number:");
console.log("second number is:%d  ",num2);
const s=String(prompt("Your name please:"));
console.log("Hello Mr/Ms.%s",s);
let b=prompt("R u studying?( 1 or 0):");
console.log(b);
//b=false;
if(b=="1"){
    console.log("Ohh Good!");
}
else{
    console.log("Ohh Bad!");
}