

let str = "Stay Positive"

//! index
console.log(str[9]); //! t
console.log(str[-1]);//! undefined

//! length
console.log(str.length);//! 13

//! fetching character(accepts negative values)
console.log(str.at(3));//! y
console.log(str.at(6));//! o
console.log(str.at(14));//! undefined (out of range)
console.log(str.at(-3));//! i

//! fetching character( doesnt accepts negative values)
console.log(str.charAt(2));//! a
console.log(str.charAt(11));//! v
console.log(str.charAt(13));//! space bec out of bound
console.log(str.charAt(-4));//! space bec negative
console.log(str.charAt(-5));//! space bec negative

//! Ascii values
console.log(str.charCodeAt(3)); //! 121
console.log(str.charCodeAt(10));//! 105
console.log(str.charCodeAt(14)); //! NaN
console.log(str.charCodeAt(-3)); //! NaN

//! cancat --> used to join more than one string
console.log(str.concat(" Be Positive", " all")); //! Stay Positive Be Positive all

//! checks whether it includes in string or not
console.log(str.includes("z"));//! false
console.log(str.includes("p"));//! false
console.log(str.includes("P"));//! true
console.log(str.includes("c"));//! false

//! repeat the string
console.log(str.repeat(5));

console.log(str.replace("Stay","Be")); //! Be Positive
console.log(str.replace("i","0"));//! Stay Pos0tive
console.log(str.replaceAll("i","0"));//! Stay Pos0t0ve

//! converts lower to ,upper to
console.log(str.toLowerCase()); //! stay positive
console.log(str.toUpperCase()); //! STAY POSITIVE
console.log(str.toUpperCase(7));//! STAY POSITIVE
console.log(str.toUpperCase(-7));//! STAY POSITIVE
// console.log(str.toUpperCase(r));//! Error

let str1 = "Stay Positive"

console.log(str1.startsWith("S"));
console.log(str1.startsWith("s"));
console.log(str1.startsWith("St"));
console.log(str1.startsWith("v"));

//! remove space 
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());

//! gives index of the character
console.log(str1.indexOf('a')); //! 2
console.log(str1.lastIndexOf('i'));//! 10

//! used to split
console.log(str1.split()); //! ['Stay Positive']
console.log(str1.split("")); //! ['S','t','a','y'...]
console.log(str1.split(" ")); //! (2) ['Stay', 'Positive']


//! PadEnd, padStart
let a = "l"
let b = "e"
console.log(a.padEnd(4,"uck")); //! luck
console.log(a.padEnd(4,"oad")); //! load
console.log(a.padStart(4,"cut")); 
console.log(a.padStart(3,"cut")); 
let c = "welcome"
console.log(c.match("l")); //! ['l', index: 2, input: 'welcome', groups: undefined]
console.log(c.match("t","e")); //! null
console.log(c.match("t")); //! null (if the str not there)
console.log(c.match("c","l")); //! ['c', index: 3, input: 'welcome', groups: undefined]


//! slice

let str2 = "Stay positive"
console.log(str.slice(0,4));//! Stay
console.log(str.slice(9,13));//! tive

console.log(str.slice(3));//! y Positive
console.log(str.slice(5));//! Positive
console.log(str.slice(0));//! Stay Positive

// todo it will give space bec first index should be less than second one
console.log(str.slice(13,9));
console.log(str.slice(-3,-6));
console.log(str.slice(3,1));
console.log(str.slice(-6,3));
console.log(str.slice(9,-4));

console.log(str.slice(5,-4));//! Posi
console.log(str.slice(-13,4)); //! Stay 

//! substring (same lke slice wont reverse)
let d ="Stay Positive"

console.log(d.substring(0,4));//! Stay
console.log(d.substring(4,0));//! Stay
console.log(d.substring(4,-5));//! Stay (if second index negative it wont consider)
console.log(d.substring(-2,-4)); //! Space (negative means 0)
console.log(d.substring(8,6)); // todo os (it will reverse when starting index is high as (6,8))
console.log(d.substring(2,-9)); //! St
console.log(d.substring(-5,3)); //! Sta (if starting index negative it consider as 0)

console.log(d.substr(5,2)); //! Po
console.log(d.substr(9,3)); //! tiv
console.log(d.substr(-2,1)); //! v
console.log(d.substr(-6,2)); //! si

//! strings are immutable

let e = 'hello'
e[0] = "L"
console.log(e); //! hello (it wont change)
