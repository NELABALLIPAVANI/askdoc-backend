
//! window is an object which allows js to interact with browser
//! whatever stores in global scope all those will be stored in window object
// console.log(window);
// var age =10
// console.log(age);

//! screen

// console.log(window.screen); //todo screen is the property of window
// console.log(window.screen.width);//! width(1536)
// console.log(window.screen.height);//! Original height(864)
// console.log(window.screen.availHeight); //! 816 -- height of the webpage
// console.log(window.screen.colorDepth);//! 24


// //! Location
// console.log(window.location);
// console.log(window.location.protocol);//! http:
// console.log(window.location.href);//! http://127.0.0.1:5500/JS/BOM.html
// console.log(window.location.port);//! 5500
// console.log(window.location.pathname);//! /JS/BOM.html
// console.log(window.location.host);//! 127.0.0.1:5500
// console.log(window.location.hostname);//! 127.0.0.1

// //! navigator

// console.log(window.navigator);
// console.log(window.navigator.appName);//! Netscape
// console.log(window.navigator.appCodeName);//! Mozilla
// console.log(window.navigator.cookieEnabled); //! true

// //! assign - if we want to navigate onclick event then we use assign
function change(){
    window.location.assign("dataTypes.html")
}
function ale(){
    window.alert("Be carefull!!")
}

// //! popup box
// //! will display in other page
function con(){
    // window.confirm("Are you readyy??")
    if(confirm("Are you readyy??")){
    document.writeln("Yess")
}
else{
    document.writeln("Noo")
}
}

// //! will display with the page
// if(confirm("Are you readyy??")){
//     document.writeln("Yess")
// }
// else{
//     document.writeln("Noo")
// }


// //! can access direct child without using window
console.log(location.protocol)