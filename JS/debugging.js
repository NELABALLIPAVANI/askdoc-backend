

let a=10 //? value unavailable(TDZ)
var b=20 //? undefined
function sum(n1,n2 ){
    let c= 30
    console.log(c);
   return n1+n2
}

console.log(sum(2,3));
console.log(a);
console.log(b);

