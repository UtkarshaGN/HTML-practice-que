//DAY 10 — Async JS + API


//Q1: What is Asynchronous JavaScript?
//Async JS allows code to run without blocking other operations.
//Example: API calls, timers — they run in background.

//Q2: What is a Promise?
//A Promise is an object representing a future result.
//It has 3 states: pending, resolved, rejected.

let promise = new Promise ((resolve, reject)=>{
    resolve("Success")
});

//Q3: Use Promise (.then)
fetch("https://dummyjson.com/products/category-list")
.then(res => res.json())
.then(data => console.log(data))

//.then() handles resolved data step-by-step.

//Q4: async/await

let products =  async function getProducts(){
    let res = await fetch("https://dummyjson.com/products/category-list")
    let data = await res.json()
    console.log (data)
}

//async/await is a cleaner way to handle promises.
//await pauses until data is received.

//Q5: Error handling

try {
    
    let products = async function getProducts() {
        let res =await fetch("wrong url")
        let data = await res.json()
        console.log(data)
    } 

} catch (error) {
    console.log( "Error :", error)
}

//try/catch handles errors safely.

//Q6: Callback vs Promise vs Async

//Callback - older, nested
//Promise - better
//Async/await - cleanest

//Explain:
//Evolution of handling async code.

//Q7: Fetch API

let posts = async function getPosts(){
  let res = await fetch("https://dummyjson.com/products/category-list")
  let data = await res.json()
  console.log(data)
}
//Fetch data from server and convert to JSON.


//Q8: setTimeout

setTimeout(() =>{
    console.log("Helo after 2sec")
}, 2000);



//Q8: Display API Data on UI

async function showUsers(){
    let res = await fetch("")
    let users = await res.json()
   
}

users.forEach(user =>{
    let div = document.createElement("div")
    div.textContent = user.name
    document.body.appendChild(div)

})
//fetch data - loop - display in DOM

//Q9: Loading state 
async function loadData() {
    loader.style.display = "block";

    let res = await fetch(url);
    let data = await res.json();

    loader.style.display = "none";
}

//Q10: Handle API error (IMPORTANT)
async function getData() {
    try {
        let res = await fetch(url);

        if (!res.ok) throw new Error("API Error");

        let data = await res.json();
    } catch (e) {
        console.log(e.message);
    }
}



//Check response and handle failure.