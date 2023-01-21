'use strict';

let num1 = +prompt('Enter first number', '');
let num2 = +prompt('Enter second number','');

function sum(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function mul(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}
console.log(`Result: ${num1} + ${num2} = ` + sum(num1, num2));
console.log(`Result: ${num1} - ${num2} = ` + sub(num1, num2));
console.log(`Result: ${num1} * ${num2} = ` + mul(num1, num2));
console.log(`Result: ${num1} / ${num2} = ` + div(num1, num2));