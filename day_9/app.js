//Events
//Day 9 — Events + Advanced DOM + Real UI Problems


//Q1: What is an Event?
//An event is an action that happens in the browser like click, scroll, input, submit.


//Q2: click event
button.addEventListener("click", function(){
    console.log("clicked!")
})
//runs function when button is clicked

//Q3: input event
input.addEventListener("input", (e) =>{
    console.log(e.target.value)
})

//get values when user type in real time

//Q4: submit event

form.addEventListener("submit", (e) =>{
    e.preventDefault()
})
//stops page reload and handles manually


//Q5: Event object

button.addEventListener("submit", (e)=>{
    console.log(e.target)
})

//Q6: preventDefault
e.preventDefault()

//stopPropagation
e.stopPropagation();
//Stops event from going to parent elements.

//Q8: Event bubbling
parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

//Event moves from child → parent.

//Q9. mouse event
element.addEventListener("mouseover", () =>{

})

element.addEventListener("mouseout", () =>{})

//Q11: key events
keydown 


//Q12: Toggle button (Real UI)
button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});



///Switches theme ON/OFF.

//Q13: Counter App Logic 
let count = 0;

button.addEventListener("click", () => {
    count++;
    display.textContent = count;
});