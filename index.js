console.log("hello World");
//1. When button is clicked
//2.Action will be happen
//3. this action will 
//.3.1. identify the "div"we want to change
// 3.2 change the colour of the "div"
let button = document.getElementById("myButton")
console.log(button);
button.addEventListener("click", (event) => {
    console.log("i am clicked")
    console.log(event)
    let square = document.querySelector(".square");
    console.log(square)
    square.style.backgroundColor = "red";
})


//giving a field where to type the text
//identify  this field
//while is typing (user typing event)
// get the text of the field
// identify where the text should appear
// put the text in the square

let textfield = document.querySelector("#textfield");
console.log(textfield);
const myCallbackfuntion = (event) => {
    console.log("i am typing")


    let text = event.target.value
    console.log(text)
    let square = document.querySelector(".square");
    console.log(square)
    square.innerHTML = text;
}
textfield.addEventListener("input", myCallbackfuntion)