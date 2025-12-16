

//! Type conversion (explicitly)

//todo Number()

// let n1 = Number("10")
// console.log(typeof n1, n1); //! 10

// let n2 = Number("hello")
// console.log(typeof n2, n2);//!NaN

// let n3 = Number("h")
// console.log(typeof n3, n3); //!NaN

// let n4 = Number(true)
// console.log(typeof n4, n4); //! 1

// let n5 = Number(false)
// console.log(typeof n5, n5);//! 0

// let n6 = Number(null)
// console.log(typeof n6, n6); //! 0

// let n7 = Number(undefined)
// console.log(typeof n7, n7);//!NaN

// let n8 = Number(4567n)
// console.log(typeof n8, n8);//!4567

// // let n9 = Number(Symbol(10))
// // console.log(typeof n9, n9); //!error cant convert symbol

// let n10 = Number(67.89)
// console.log(typeof n10, n10); //!67.89

// let n11 = Number("10h")
// console.log(typeof n11, n11);//! number NaN

// let n12 = Number("h10")
// console.log(typeof n12, n12); //! number NaN

// //!parseInt()
// let n13 = parseInt(10)
// console.log(typeof n13, n13);//!10

// let n14 = parseInt(10.765)
// console.log(typeof n14, n14); //!10

// let n15 = parseInt("32")
// console.log(typeof n15, n15); //!32

// let n16 = parseInt("10f")
// console.log(typeof n16, n16); //!10

// let n17 = parseInt("f10")
// console.log(typeof n17, n17);//!NaN

// let n18 = parseInt("pav")
// console.log(typeof n18, n18); //!NaN

//!parseFloat()

// let n1 = parseFloat("123");
// console.log(n1); //!123

// let n2 = parseFloat("123.23");
// console.log(n2);//!123.23

// let n3 = parseFloat("123.87sds1");
// console.log(n3);//!123.87

// let n4 = parseFloat("hgh123");
// console.log(n4);//!NaN

// let n5 = parseFloat("null");
// console.log(n5);//!NaN

// let n6 = parseFloat("undefined");
// console.log(n6);//!NaN

// //!string()

// let str1 = String(10)
// console.log(str1, typeof str1); //! 10 string

// let str2 = String(10.876)
// console.log(str2, typeof str2);//! 10.876 string

// let str3 = String(true)
// console.log(str3, typeof str3);//!true string

// let str4 = String(false)
// console.log(str4, typeof str4);//!false string

// console.log(str3 +" " + str4); //!true false

// //! boolean()

// //? falsy values -- all output are false

// let b1 = Boolean(0)
// console.log(b1); //!

// let b2 = Boolean('')
// console.log(b2);

// let b3 = Boolean(false)
// console.log(b3);

// let b5 = Boolean(null)
// console.log(b5);

// let b6 = Boolean(undefined)
// console.log(b6);

// let b7 = Boolean(NaN)
// console.log(b7);

// //? truthy values -- all output are true

// let a1 = Boolean(1)
// console.log(a1); //!

// let a2 = Boolean(' ')
// console.log(a2);

// let a3 = Boolean(true)
// console.log(a3);

// let a4 = Boolean(87557)
// console.log(a4);

// let a5 = Boolean(564.987)
// console.log(a5);

// let a6 = Boolean(0.7656)
// console.log(a6);


//! Type coercion --> implicitly

// let var1 = 10;
// let var2 = true;
// let res = var1+var2
// console.log(var1+var2, typeof res); //! 11 number

let s1 = "hello"
let s2 = 10.43;
let res1 = s1 + s2
console.log(res1,typeof res1); //!hello10.43 string

// let a = "hello"
// let b = true;
// // let b = 10;
// let res1 = a + b
// console.log(res1,typeof a+b); //! hellotrue stringtrue
// console.log(res1,typeof b+a); //! hellotrue booleanhello
// console.log(res1,typeof b+ typeof a); //! hellotrue booleanstring
