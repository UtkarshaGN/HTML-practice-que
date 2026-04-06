//objects 

//Q1: Loop through an Object
let user ={
    name : "John",
    age : 30,
    city: "Pune"
}

function loopObject(obj){
    for(let key in obj){
        console.log(key, obj[key])
    }
}
loopObject(user);

//Q2: Get Object Keys & Values

let students ={
    name: "Anita",
    course: "MERN"
}

console.log(students.name)
console.log(students['course'])

console.log(Object.keys(students))
console.log(Object.values(students))

//Q3: Merge Two Objects
//In JavaScript, when you merge objects using the spread operator (...), keys must be unique. If both objects have the same property names, the last one wins.
//using (...spread operator)
let school ={
    schoolName : "QUT",
    schoolCourse: "IT"
}
//console.log(school)

let tafe ={
    name : "QLD tafe",
    course : "web"
}

let merged = {...school, ...tafe}
console.log(merged)

//Q4: Object Destructuring

let books ={
    name : "Ramayana",
    writer : "Laxaman",
    city : "Gold coast"
}

let{name, city} = books
console.log(books)


//Q5: Access Nested Object
let bookMore ={
    name : "Ramayana",
    writer : "Laxaman",
    city : "Gold coast",

     bookData:{
        author: "raj",
        age: 50
    }
}

console.log(bookMore.bookData.age) 

//Q6: Update Object Property

bookMore.city = "Brisbane" 
console.log(bookMore)


//Q7: Delete Property

delete bookMore.bookData.age
console.log(bookMore)