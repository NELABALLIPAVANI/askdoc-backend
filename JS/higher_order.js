

//! find()

// let arr = [30,40,20,41,10,67,87,21,7]
// let res = arr.find((val)=>{
//     return val > 40
// })
// console.log(res);// todo 41(gives value)

// //! findIndex()
// let arr1 = arr.findIndex((val)=>{
//     return val > 50
// })
// console.log(arr1);// todo 5(give index value)

// //! findLast()
// let arr2 = arr.findLast((val)=>{
//     return val > 20
// })
// console.log(arr2);// todo 21 (gives value from last)

// //! findLastIndex()
// let arr3 = arr.findLastIndex((val)=>{
//     return val > 30
// })
// console.log(arr3); // todo  6 (gives index value from last)

//! some() --> gives true any one is true
let arr = [10,7,30,50,2]

let res = arr.some((val)=>{
    return val % 2 ==0
})
console.log(res);//! true

//! every() --> gives true when all satisfy
let res1 = arr.every((val)=>{
    return val%2 ==0
})
console.log(res1); //! false

//! sort()
let 