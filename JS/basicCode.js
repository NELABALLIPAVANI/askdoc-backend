


let a = prompt("welcome suresh, whats your age?");
printMsg(a)
let b = prompt("welcome ramesh, whats your age?");
printMsg(b)
let c = prompt("welcome haresh, whats your age?");
printMsg(c)
let totAge =0;


function printMsg (name,age){
    totAge += age
    console.log(totAge);
    console.log(`Hii ${name}, is your age ${age}`);
    
    console.log("Thank you")
}


