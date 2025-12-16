
//! LocalStorage
// localStorage.setItem("name","pavani")
// localStorage.setItem("age",21)
// let a = localStorage.getItem("age")
// let b = localStorage.getItem("name") //! if not set name, then it will give -- null
// document.writeln(a)//! if not set name, then it will give -- null
// document.writeln(b) //! if not set name, then it will give -- null
// console.log(a);
// localStorage.removeItem("age")
// localStorage.clear()

//! sessionStorage
// sessionStorage.setItem("name","pavani")
// sessionStorage.setItem("age",21)
// let a = sessionStorage.getItem("age")
// let b = sessionStorage.getItem("name") //! if not set name, then it will give -- null
// document.writeln(a)//! if not set name, then it will give -- null
// document.writeln(b) //! if not set name, then it will give -- null
// console.log(a);
// localStorage.removeItem("age")
// localStorage.clear()

//! window.feth()

// let a = window.fetch("https://fakestoreapi.com/products").then((val)=> val.json()).then((res)=> console.log(res));
// console.log(a);

//! async and await
// async function fetchdata(){
//     let a = await fetch("https://fakestoreapi.com/products")
//     let res = await a.json()
//     console.log(res);    
// }
// fetchdata()