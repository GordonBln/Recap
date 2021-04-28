console.log("hello World");
//1. When button is clicked
//2.Action will be happen
//3. this action will 
//.3.1. identify the "div"we want to change
// 3.2 change the colour of the "div"
let button = document.getElementById("myButton")
console.log(button);
button.addEventListener("click", () => {
    console.log("i am clicked")
    let square = document.querySelector(".square");
    console.log(square)
    square.style.backgroundColor = "red";
})
//document.getElementById("square").addEventListener("click", function(){
    //document.getElementById("demo").innerHTML = "Hello World";
 // }); 