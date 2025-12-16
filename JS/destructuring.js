
//! values from array,propertes from obj

let arr = ["apple","banana","cherries","grapes","mango"]

// let a = arr[0]
// let b = arr[1]

// console.log(a);
// console.log(b);

//! destructuring elements from an array

// let [a,b,c,d,e] = arr
// console.log(a);
// console.log(b);


//! destructuring specific elements from an array

// let [b, , ,,e] = arr
// console.log(b);
// console.log(e);

//! destructuring an array by using rest parameter

// let [a,b,c,...d]=arr
// let [a,,...d]=arr
// console.log(a);
// console.log(d);

//! storing default value while destructuring an array

// let [a,,b,,c,d,e,f="Dragon"]=arr
// console.log(d);//! undefined
// console.log(f)

//! Nested array destructuring
// let arr1 = [10,20,30,40,[50,60,[80,90,[100,220]]]]

// let [a,b,c,d,[e,f,[g,h,[i,j]]]] = arr1

// console.log(i);


//todo Obj
//! destructuring the properties from an obj
// let obj = {
//     emp: "pavani",
//     salary: 50000,
//     company: "wipro",
//     location1: "Banglore", //todo (location not allowed bec it will be in window obj already so location1)
//     age: 21
// }

// let {emp,salary,company,location1} = obj

// let {salary,location1} = obj

// let {salary,emp, ...a} = obj //todo spread operator

// console.log(obj);//! {emp: 'pavani', salary: 50000, company: 'wipro', location1: 'Banglore', age: 21}
// console.log(a);//!--skips emp,sal {company: 'wipro', location1: 'Banglore', age: 21}
// let {salary,company,age=22} = obj
// console.log(obj);//!-- add age {emp: 'pavani', salary: 50000, company: 'wipro', location1: 'Banglore', age: 21}

// let {emp:a,salary:b} = obj
// console.log(a); //! pavani
// console.log(b);//! 50000


let student = {
    std_name : "pavani",
    std_id : 3562,
    age : 20,
    gender : "female",
    address:{
        doorno : 1/88,
        street: "kummari",
        city : "Tirupati",
        pin : 517644
    },
    hobbbies: ["playing chess","reading books","Cooking"]
}

let  {
    std_name ,
    std_id ,
    age ,
    gender ,
    address:{
        doorno ,
        street,
        city ,
        pin ,
    },
    hobbbies: [a,b,c]
}=student
console.log(a);
console.log(std_name);
console.log(street);

