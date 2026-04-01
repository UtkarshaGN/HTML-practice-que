//DAY 1 — Interview Coding Questions
//Topics:
// Variables
// Data types
// Operators
// Basic logic

//Question 1: Add Two Numbers

 function addNum(a, b){
    return a+b;
 }

console.log(addNum(10, 33))

//What if inputs are strings?

//Question 2: Even or Odd

 function isEven(num){
     if(num%2==0){
         return "Even";
     }
     else{
        return "Odd";
    }
 }
 console.log(isEven(7));

//Shortcut
//return num%2==0?"Even" : "odd";

//Question 3: Largest of Two Numbers

 function max(a,b){
     if(a>b){
         return a;
     }
     else{
        return b;
    }
 }

console.log(max(22, 78))

//Question 4: Simple Calculator

 function calculator(a, b, operator){
    if(operator == "+") return a+b;
    else if(operator == "-") return a-b;
     else if(operator == "*") return a*b;
     else if(operator == "/") return a/b;
    else return " Invalid operator"
 }

console.log(calculator(10, 5, "+"))

//Question 5: Swap Two Variables

let a= 10;
 let b=20;

 [a,b] =[b,a]
 console.log(a,b)

//Question 6: Check Data Type
 function checkType(value){
     return typeof value;
 }

 console.log(checkType(10))
 console.log(checkType("Ram"))
 console.log (checkType(true))

//Question 7: Positive, Negative, or Zero
function checkNum(num){
    if(num>0) return "Positive";
    else if(num<0) return "Negative";
    else return "Zero"
}

console.log(checkNum(-40))

//Question 8: Sum of First N Numbers
let sum =0;
let n =5;
for(let i=1 ; i<=n; i++){
    sum = sum+i
}

console.log(sum)

function SumNumbers(n){
    let total = 0;
    for(let i=1; i<=n; i++){
         total = total + i;
    }
    return total;
}
console.log(SumNumbers(10))

//Mini Challenge - Convert Celsius to Fahrenheit

//formula - F = (C * 9/5) + 32

function convert(celsius){
    return (celsius *9/5) +32;
}


console.log(convert(22))