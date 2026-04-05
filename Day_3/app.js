//Loops + Advanced Logic
//for, while
//Nested loops
//Patterns
//Logic building


//Question 1: Print 1 to N
 
 function printNumbers(n){
    for(let i=1; i<=n; i++){
         console.log(i)
     }
 }

// printNumbers(10)

// //Question 2: Sum of Numbers

function sumNumbers(n){
    sum = 0;
    for(let i =1; i<=n; i++){
      sum = sum + i;
   }
   return sum;    
 }

// console.log(sumNumbers(5))

// //Question 3: Factorial (IMPORTANT)

function factorial(n){
    fact = 1; 
    for(let i=1; i<=n; i++){
      fact = fact * i;
       //1=  1*1 =1
       // 2= 1*2 = 2
       // 6 =2*3 =6
   }
   return fact;
 }

// console.log(factorial(4))

//Question 4: Reverse a Number

function revNumber (num){
    let rev = 0;
  while(num>0){
    digit = num % 10;
    rev = rev *10 + digit

   num = Math.floor(num/10)
  }
  return rev;
}

console.log(revNumber(12344567))


//Question 5: Palindrome Number
//A number is palindrome if:
//It reads the same forward and backward

function isPalindrome(num){
    let original = num
    let rev =0;

    while(num>0){
        digit = num %10;
        rev = rev *10 + digit
        num = Math.floor(num/10)
    }

    return original === rev;
}

console.log(isPalindrome(1221))

//Question 7: Fibonacci Series
//Fibonacci series is a sequence where:
//Each number = sum of the previous two numbers
// Pattern - 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//0 + 1 = 1
//1 + 1 = 2
//1 + 2 = 3
function fibonacci(n){

    let a = 0; b=1;

    for(let i =1; i< n; i++){
        console.log(a)

        let temp = a+b //0+1 =1
        a = b //0
        b= temp //1

    }
     
} 
fibonacci(7)

//Question 10: Count Digits 

function countDigits(num){

    let count =0;

    while(num>0){
        count++;

        num = Math.floor(num/10)
    }

    return count
}
console.log(countDigits(5))


//  Final Rule (Remember this)

//  Use while - when condition-based loop -Run until condition becomes false (num becomes 0)
// Use for - when count-based loop - Run fixed number of times
