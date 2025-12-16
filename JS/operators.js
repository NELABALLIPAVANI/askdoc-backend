
//! Addition

// console.log("hello" + "hi");//!hellohi
// console.log("hello" + "10");//!hello10
// console.log("20" + "6");//!206
// console.log("hello" + true);//!hellotrue
// console.log("hello" + false);//!hellofalse
// console.log("hello" + null);//!hellonull
// console.log("hello" + undefined);//!helloundefined

// //!subtraction

// console.log("hello" - "hi");//!NaN
// console.log("hello" - "10");//!NaN
// console.log("h" - "10");//!NaN
// console.log("20" - "6");//!14
// console.log("20" - 10);//!10
// console.log("20" - true);//!19
// console.log("20" - false);//!20
// console.log("20" - null);//!20
// console.log("20" - undefined);//!NaN

// //!multiplication

// console.log("hello" * "hi");//!NaN
// console.log("hello" * "10");//!NaN
// console.log("h" * "10");//!NaN
// console.log("20" * "6");//!120
// console.log("20" * 10);//! 200
// console.log("20" * true);//! 20
// console.log("20" * false);//! 0
// console.log("20" * null);//! 0
// console.log("20" * undefined);//!NaN

// //!division

// console.log("hello" / "hi");//!NaN
// console.log("hello" / "10");//!NaN
// console.log("h" / "10");//!NaN
// console.log("20" / "6");//! 3.333333335
// console.log("20" / 10);//! 2
// console.log("20" / true);//! 20
// console.log("20" / false);//! infinity
// console.log("20" / null);//! infinity
// console.log("20" / undefined); //!Nan

// //!modulus

// console.log("hello" % "hi");//!Nan
// console.log("hello" % "10");//!Nan
// console.log("h" % "10");//!Nan
// console.log("20" % "6"); //! 2
// console.log("20" % 10);//! 0
// console.log("20" % true);//! 0
// console.log("20" % false);//!Nan
// console.log("20" % null);//!Nan
// console.log("20" % undefined);//!Nan

// //!exponent

// console.log("hello" ** "hi");//!Nan
// console.log("hello" ** "10");//!Nan
// console.log("h" ** "10");//!Nan
// console.log("20" ** "6");//! 64000000
// console.log("20" ** 10);//! 1024000000
// console.log("20" ** true);//! 20
// console.log("20" ** false);//! 1
// console.log("20" ** null);//! 1
// console.log("20" ** undefined);//!NaN

// //! pre increment
// let a = 10;
// console.log(++a); //todo 11
// //! post increment
// let b = 10
// console.log(b++);//todo 10

// //!pre decrement
// let a = 10;
// console.log(--a); // todo 9
// //!post decrement
// console.log(a--); // todo 10


//!assignment operators

// let age = 10;
// age += 2; //! age = age + 2
// // age -= 2;
// // age *= 2;
// // age /= 2;
// // age %= 2;
// console.log(age);


//!comparison operators

// console.log(2 >3); //! false
// console.log(2 <3); //! true

// console.log(2 > 2); //! false
// console.log(2 >= 2); //! true
// console.log(2 < 2); //! false
// console.log(2 <= 2); //! true

// console.log(true >=1); //!true
// console.log(1 < false);//!false
// console.log(0 < false);//!false
// console.log(0 <= false);//!true

// console.log(true ==1);//!true
// console.log(true ===1);//!false

// console.log("1" == 1);//!true
// console.log("1" ===1);//!false

// console.log(null == undefined);//!true bec both checks absence of values
// console.log(null === undefined);//!false
// console.log(null != undefined);//!false
// console.log(null !== undefined);//!true

// console.log("2" == "2");//!true
// console.log("2" === "2");//!true
// console.log("2" == "3");//!false
// console.log("2" === "3");//!false

// console.log(2 != "2");//!false
// console.log(2 !== "2");//!true

//!logical operator

// //? AND operator
// console.log(2 > 1 && 2< 3);//!true
// console.log(2 < 1 && 2 < 3);//!false
// console.log(2 > 1 && 2 > 3);//!false
// console.log(2 < 1 && 2 > 3);//!false


// //? OR operator
// console.log(true ==1 || false ==0);//!true
// console.log(true === "1" || false ==0);//!true
// console.log(true == "1" || false ===0);//!true
// console.log(true === "1" || false === 0);//!false


// //? !Operator

// console.log(!"");//!true
// console.log(!" ");//!false
// console.log(!"hello");//!false
// console.log(!null);//!true
// console.log(!undefined);//!true
// console.log(!true);//!false
// console.log(!false);//!true

//!ternary operator

// console.log(11%2 ==0 ? even : odd);
 let marks = prompt();

        ((marks<100) &&(marks>90) )?(console.log("you got A-grade")):
        ((marks>80) && (marks<90))?(console.log("You got B-Grade")):
        ((marks<80) && (marks>70))?(console.log("You got C-Grade")):
        ((marks<70) && (marks>60))?(console.log("You got D-Grade")):
        ((marks<60) && (marks>50))?(console.log("You got E-Grade")):
        (marks<50)?(console.log("You are fail for the exam")):(console.log("You have not attend for exam"))




// console.log(null == false); //! false
// console.log(null != false); //! true
// console.log(null == true); //! false
// console.log(null != true); //! true 
// console.log(null == undefined); //! true 
// console.log(null === undefined); //! false 
// console.log(null != undefined); //! false 
// console.log(null !== undefined); //! true 
