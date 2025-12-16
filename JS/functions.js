//! functions --> Block of code which is used to perfome specific task

//todo Named Function

//? Non-Parameterized

// function greeting(){
//     console.log("Good Afternoon");
// }
// greeting();

// //? Parameterized

// function addition(a,b){
//     console.log(`addition of ${a} and ${b} is ${a+b}`); 
// }
// addition(2,6)
// addition(6.5,6.2)

// function mul(c,d){
//     console.log("heyy");
//     return c*d;
// }
// let res = mul(2,6)
// console.log(res);
// console.log( mul(7,5));

// //todo Anonymous Function

// function(){
//     console.log("Anonymous Function");
// }
// a() --> Error

// let add = function(n1,n2){
//     console.log("Ananymous Function");
//     console.log(`addition of ${n1} and ${n2} is ${n1+n2}`);
//     return n1 + n2 
// }
// let res1 = add(10,10);
// console.log(res1);

//! arrow function

/* () => {
   block of code    
} */

// let a = () => {
//     console.log("I am Arrow Function");
// }
// a()

// //! explicit return

// let add = (a,b)=>{
//     return a+b
// }
// console.log(add(1,2));
 

// //! implicit return
// let sum = (n1,n2) => n1+n2
// console.log(sum(2,2));


// //! single parameter () is optional

// let name = n => n
// console.log(name("pavani"));

//!OR

// function name1 (n){
//     return n
// }
// console.log(name1("Anii"));


//! IIFE
//! immediately invoked functional expression

//? way1 : to call the function

// (function(){
//     console.log("I am IIFE function");
// })()


// //? way2 : to call the function

// (function(){
//     console.log("I am IIFE function");
// }())


// //! there should be nothing in between function creation and function calling

// (function(){
//     console.log("I am IIFE function");
// })
// console.log("hii");
// () --> Error


// //! we cannot call the function more than once
// (function(a,b){
//     console.log(a+b);
// })(5,6)
// (2,4) --> error must be call only once

// (function(a,b){
//     return a+b;
// })console.log(add(2,2)); --> error

//! default function

// function add(a=1,b=1){
//     return a+b
// }
// console.log(add(8,0,4)); //? 8


//! Pure function -- not depending on external source

// function mul(a,b){
//     return a*b
// }
// console.log(mul(5,5)); //? 25

// //! impure function -- depends on external source

// let n = prompt("Enter a number")
// function mul1(a,b){
//     return a*b*n
// }
// console.log(mul1(3,4,2)); //? 3rd number doesn't take it only takes user 'n'

//! How function works
//! hoisting is possible only in named function

// sum(4,5); //? 9
// function sum(a,b){
//     console.log(a+b);
// }

//! hoisting is not possible with anonymous function

// sum(4,5)
// let sum = function(a,b){
//     console.log(a+b);
// }//? Error bec we are calling before initialization and we are writing call stmt before fun

// sum(4,5) //? Error bec we are calling before initialization and we are writing call stmt before fun
// var sum = function(a,b){
//     console.log(a+b);
// } 


//! Higher order function --> Function which accepts another function as a argument
//! Call back --> function which passed as argument function

// function sum(a,b){
//     return a+b
// }
// function sum1(n1,n2,fun){
//     return fun(n1,n2)
// }
// console.log(sum1(11,0, sum));


//! radius (without using HOF)
// let radius = [2,3,4,1,3,6]
// function area(radii){
//     let output = []
//     for(let i=0; i< radii.length; i++){
//         output.push(Math.PI * radii[i] **2)
//     }
//     return output
// }
// console.log(area(radius));
// function dia(radii){
// let output =[]
// for(let i=0; i<radii.length; i++){
//     output.push(2 * radii[i])
// }
// return output
// }
// console.log(dia(radius));


//! using HOF(Higher Order Function)
// let radii = [2,3,4,1,3,6]
// function area(r){
//     return Math.PI * r**2
// }
// function diameter(r){
//     return 2*r
// }
// function hof(radii, logic){
//     let output =[]
//     for(let i=0; i<radii.length; i++){
//         output.push(logic(radii[i]))
//     }
//     return output
// }
// console.log(hof(radii,area));
// console.log(hof(radii,diameter));


//!Nested Function
//! Closure
// function grandParent(){
//     let a = 100;
//     console.log("grand parent", a);
//     function parent(){
//         let b =50;
//         console.log("Grand Parent" ,a);
//         console.log("Parent",b);

//         function child(){
//             let c = 20;
//             console.log("Grand Parent in child", a);
//             console.log("Parent in child", b);
//             console.log("Child", c);
//         }
//         child()
//     }
//     parent()
// }
// grandParent();

//! returning and calling at a time.
// function grandParent(){
//     let a = 100;
//     console.log("grand parent", a);
//     function parent(){
//         let b =50;
//         console.log("Grand Parent" ,a);
//         console.log("Parent",b);

//         function child(){
//             let c = 20;
//             console.log("Grand Parent in child", a);
//             console.log("Parent in child", b);
//             console.log("Child", c);
//         }
//         return child
//     }
//     return parent
// }
// grandParent()()();

//! argument object

// function sum(){
//     return arguments[0] + arguments[1] + arguments[2]
// }
// console.log(sum(2,3,1,5,4)); // todo 6

//! In arrow fun argument obj not defined
// let a =() => {
//     return arguments
// }
// console.log(a(4,3,5,1,2)); // todo error

