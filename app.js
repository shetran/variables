let number = Number(prompt("What is your bill?"));
let sum = number*1.07;
let tip = sum*0.05;
let totalPrice = sum+tip;

document.body.innerHTML=totalPrice;