
//! prompt for name along with prepand text

let head = document.getElementById("heading")
// function change(name){
//         head.innerHTML = `hello ${name}`
//         head.style.backgroundColor = "green"
// }

//! OR displays in document as new text -- change() should be given in button oncick
// function change(){
//     let name = prompt("Enter your name")
//     document.writeln("hello" + name)
// }

//! MouseOverEvents()
function mouse(color){
    head.style.backgroundColor = color
}

//! mouseLeave -- function names should be diff(mouse,mouse1)
function mouse1(){
    head.style.backgroundColor = "red"
}

//! onKeyUp,onKeyDown,onKeyPress
let inputfield = document.getElementById("inputfield") //todo (without value text wont display in console)
// let inputfield = document.getElementById("inputfield").value //todo (if we mention value here must be drop this stmt inside fun and noneed to mention value in console)
function funkeys(){
        console.log(inputfield.value);
}

//! onkeyUp -- when we release then only shows in console, backSpace,space works
//! onkeyDown -- prints as soon as we write in input field, backSpace works
//! onkeyPress -- works like onkeyDown, backSpace doesn't works in console but works in input field