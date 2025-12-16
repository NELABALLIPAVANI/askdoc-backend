

let h = document. getElementById("h1")
let p  = document.getElementById("p")

//! clicking and double click events -- for heading
//! works only when we click double tab
// function changeColor(){
//     h.style.backgroundColor = "red"
//     h.style.color = "white"
//     h.innerText = "welcome to the JS"
// }

// function changeColor1(){
//     h.style.backgroundColor = "green"
//     h.style.color = "pink"
//     h.innerText = "Byee...."
//  }

//! theme task ( For only onclick and double click)
// function changeColor(){
//     // p.style.backgroundColor = "pink"
//     p.style.color = "black"
//     h.style.color = "black"
//     document.body.style.backgroundColor = "green"
// }
// function changeColor1(){
// //    p.style.backgroundColor = "pink"
//     p.style.color = "white"
//         h.style.color = "white"
//     document.body.style.backgroundColor = "black"

// }

//! theme change - along with text in botton just within one click
let button = document.getElementById("fun")

let theme = true
function change(){
        if(theme == true){
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
            button.innerHTML = "light" //todo can also use innerText
            theme = false
        }
        else{
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
            button.innerHTML = "dark"
            theme = true
        }
}