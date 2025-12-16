
//! Targeting ID -- eventhough using same name wont apply for all..only for first element it will apply
// let a = document.getElementById("heading")
// a.style.backgroundColor = "red"
// console.log(a);

// let b = document.getElementById("heading1")
// b.style.backgroundColor = "blue"
// console.log(a);

//! HTMLCollection -- looks like array elemets but not array
//! IDname return One element
//! Tagname,classnames return HTML Collection

//! Targeting classname
// let c = document.getElementsByClassName("para")
// c[0].style.backgroundColor = "pink"
// c[1].style.backgroundColor = "pink"
// c[2].style.color = "pink"
// console.log(c);

//todo to convert HTML collection by using foreach..it won't work.
//todo so we should convert by using (Array from)
//! By using foreach loop -- if we want to style multiple elements
// let d = document.getElementsByClassName("para")
// Array.from(d).forEach(val => {
//     val.style.backgroundColor = "red"
//     val.style.color = "white"
// })

//! Targeting TAG name
// let h = document.getElementsByTagName("p")
// h[0].style.backgroundColor = "hotpink"
// h[1].style.backgroundColor = "pink"

// Array.from(h).forEach(val => {
//     val.style.backgroundColor = "green"
//     val.style.color = "white"
// })
// console.log(h);

//! QuerySelector -- It returns  NodeList and looks like Array can work by using foreach

//! Targeting Tagname
// let a = document.querySelector("h1")
// a.style.backgroundColor = "red"

//! Targeting IDName
// let b = document.querySelectorAll("#heading")
// b.style.backgroundColor = "red"

//! Targeting className
// let b = document.querySelector(".para")
// b.style.backgroundColor = "red"

//! If there are multiple elments to target. Then we go for the foreach loop

//! Targeting className
// let b = document.querySelectorAll(".para")
// b.forEach(val =>{
//     val.style.backgroundColor = "green"
// })

//! targeting idName
// let b = document.querySelectorAll("#heading")
// b.forEach(val =>{
//     val.style.backgroundColor = "green"
// })

//! Targeting tagName
// let b = document.querySelectorAll("h1")
// b.forEach(val =>{
//     val.style.backgroundColor = "green"
// })
// console.log(b); //todo NodeList

//! setAttribute

let a = document.getElementsByTagName("h1")
a[0].setAttribute("id","heading1")
// console.log(a);
a[1].setAttribute("id","heading2")

// //! updating Attribute

a[0] .id = "heading2"
// a[1].className = "heading2"

// //! delete Attribute

a[0].removeAttribute("id")
a[1].removeAttribute("class")