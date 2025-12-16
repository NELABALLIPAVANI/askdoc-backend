

let d = new Date()

console.log(d);//! Takes current date(Fri Aug 01 2025 15:13:32 GMT+0530 (India Standard Time))
console.log(d.toLocaleDateString());//!8/1/2025
console.log(d.toLocaleTimeString());//!3:11:10 PM

var d1 = new Date()
var d1 = new Date(2026,7)//!Sat Aug 01 2026 00:00:00 GMT+0530 (India Standard Time)
var d1 = new Date(2026,7,8)//!Sat Aug 08 2026 00:00:00 GMT+0530 (India Standard Time)
var d1 = new Date(2026,7,8,22)//!Sat Aug 08 2026 22:00:00 GMT+0530 (India Standard Time)
var d1 = new Date(2024,5,8,21,30)//! Sat Jun 08 2024 21:30:00 GMT+0530 (India Standard Time)
var d1 = new Date(2024,5,8,21,30,54)//! Sat Jun 08 2024 21:30:54 GMT+0530 (India Standard Time)
var d1 = new Date(2024,5,8,21,30,54,1000)//! Sat Jun 08 2024 21:30:55-millisec GMT+0530 (India Standard Time)
console.log(d1);//! Takes current date(Fri Aug 01 2025 15:13:32 GMT+0530 (India Standard Time))

var d2 = new Date()//! Current
d2.setFullYear(2016)//!Mon Aug 01 (2016) 15:22:14 GMT+0530 (India Standard Time)
d2.setMonth(11)//!Thu (Dec) 01 2016 15:22:40 GMT+0530 (India Standard Time)
d2.setDate(30)//!Fri Dec (30) 2016 15:23:10 GMT+0530 (India Standard Time)
d2.setHours(22)//!Fri Dec 30 2016 (22):23:32 GMT+0530 (India Standard Time)
d2.setMinutes(57)//! Fri Dec 30 2016 22:(57):54 GMT+0530 (India Standard Time)
d2.setSeconds(59)//!Fri Dec 30 2016 22:57:(59) GMT+0530 (India Standard Time)
d2.setMilliseconds(999)//! can't visible
console.log(d2);

console.log(d2.getFullYear());//! 2016
console.log(d2.getMonth());//! 11
console.log(d2.getDate());//! 30
console.log(d2.getDay());//! 5
console.log(d2.getHours());//! 22
console.log(d2.getMinutes());//! 57
console.log(d2.getSeconds());//! 59
console.log(d2.getMilliseconds());//! 9


//! Math objects

console.log(Math.round(2.4356));//! 2
console.log(Math.round(2.6789));//! 3

console.log(Math.floor(2.56));//! 2 like trunc ( takes only integer part)
console.log(Math.floor(2.1));//! 2

console.log(Math.ceil(234.1)); //! (235) round to upper value
console.log(Math.ceil(234.5));//! 235

console.log(Math.trunc(234.5));//!(234) removes decimal part(only integer part)
console.log(Math.trunc(23421));//!(23421)

console.log(Math.min(1,2,3,4,-76));//! (-76)
let arr=[1,2,3,4,-47]
console.log(Math.min(...arr)); //!(-47) spread operator (divides an array)

console.log(Math.max(1,2,3,67));//! 67
console.log(Math.max(-23,-2,12,-45));//! 12


console.log(Math.pow(12,4));//! 12 power 4 (20736)
console.log(Math.pow(3,4));//! 3 power 4 (81)

console.log(Math.random()); //! generate  random num 0.something (0.76577)
console.log(Math.random()*10); //! generate  random num 1-9 (2.454)
console.log(Math.random()*100); //! generate  random num 10-99 (43.876)
console.log(Math.random()*1000); //! generate  random num 100-999(987.8766)

console.log(Math.sign(-234)); //!-1 (represents 1 along with sign)
console.log(Math.sign(234)); //!1
console.log(Math.sign(-0)); ///0

console.log(Math.sqrt(64));//! 8
console.log(Math.sqrt(4));//! 2

console.log(Math.PI);//! 3.1415
console.log(Math.abs(-123)); //!(123) convert into positive  if positive it will keep the same number



