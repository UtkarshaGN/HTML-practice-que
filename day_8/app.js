//DOM
//Q1 Select an element.
//How do you select an element in DOM?

document.getElementById("btn")
document.getElementsByClassName("innerDiv")
document.querySelector(".classname")

//Q2: Change text of element

document.querySelector("h1").textContent = "Hello";

//it changes only text inside element

//Q3: Change HTML content

div.innerHTML = "<p>Hello World! I am here .... </p>"


//Q4: Create new element

let div = document.createElement("div")
div.textContent = "Hello";
document.body.appendChild(div)

//Q5: Add / Remove class

element.classList.add("active")
element.classList.remove("active")

//Q6 Button click event

btn.addEventListener("click", function(){
    console.log("alert")
})


//Q7: Form submit event

form.addEventListener("submit", function(e){
    console.log("submitted")
    e.preventDefault();
})

//Q8: Input value get in form
//Gets value typed in input box.
input.value


//Q9: Change style dynamically

element.style.color = "red";
element.sryle.backgroundColor = "black"

// Q10. remove element

element.remove()

//Q11. get all elements

document.querySelectorAll(".className")

//Q12 Toggle class

element.classList.toggle("active")