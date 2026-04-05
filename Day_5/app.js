//Arrays deep
//arrays basics
//map()
//filter()
//reduce()

//Question 1: Double All Numbers (map)

let arr = [2, 4, 6, 8, 10]

let result = arr.map(num => num*2)
console.log(result)


//Question 2: Get Even Numbers (filter)

let evenNum = [10,35,66,87, 66, 54, 90]

let final =evenNum.filter(num => num%2 ===0);
console.log(final)


//Question 3: Sum of Array (reduce)
let sum = [10, 20, 30, 40, 50]

let sumdata = sum.reduce((acc, curr) => acc + curr, 0)

console.log(sumdata)


//Question 4: Find Maximum Number
let maxNum = [34, 78, 90, 55, 78, 99, 22]
let max = arr.reduce((a, b) => a > b ? a : b);

console.log(max); // 

//Question 5: Count Occurrences
let arrs = ["a", "b", "a", "c", "b", "a"];

let count = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(count);
// { a: 3, b: 2, c: 1 }

//Question 6: Filter Products Under Price

let products =[
    {
        name :"Laptop",
        price : 1000
    },
    {
        name : "Mobile",
        price : 899
    },
    {
        name : "Phone",
        price: 60
    }
]

let cheap = products.filter(p => p.price < 999);

console.log(cheap)


//Question 7: Get Only Names

let users= [
    {
        name : "Anaya",
        age : 20
    },
    {
        name: "Sana",
        age: 30
    }
]

let userNames = users.map(n => n.name)
console.log(userNames)

//Question 8: Total Cart Price
let cart = [
    {
        item: "Book",
        price : 100
    },
    {
        item : "Pen",
        price : 50
    },
    {
        item : "Notebook",
        price : 80
    }
    
]
let total = cart.reduce((sum, item) => sum + item.price, 0)
console.log(total)
