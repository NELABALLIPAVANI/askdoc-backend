
//todo By using Object literals {}

// let user = {
//     username : "pavani",
//     age : 21 ,
//     gender : "Female"
// }
// console.log(user.username);
// console.log(user.age);
// console.log(user['']); //! undefined
// console.log(user['gender']); //! Female

// //! adding new property to the object
// user.city = "Tirupati"
// user.institute = "Qspiders"
// console.log(user); //! {username: 'pavani', age: 21, gender: 'Female', city: 'Tirupati', institute: 'Qspiders'}

// //! updating the value in the object
// user.age = 20
// console.log(user); //! updated age to 20

// //! delete the property
// delete user.gender
// console.log(user); //! gender property will be deleted

// //todo By using new object

// let obj = new Object ({emp : "pavi", sal : 30000, })

// //! adding property
// obj.location = "Hyderabad"
// obj.shift = "night"
// console.log(obj); //! {emp: 'pavi', sal: 30000, location: 'Hyderabad', shift: 'night'}

// //! updating value
// obj.location = "Bangolore"
// console.log(obj); //! location will be uodated to Bangolore

// //! delete the property
// delete obj.shift
// console.log(obj); //! {emp: 'pavi', sal: 30000, location: 'Bangolore'}

// obj['emp'] = "chaya"
// console.log(obj); //! {emp: 'chaya', sal: 30000, location: 'Bangolore'}


//todo Object Methods

// let user = {
//     username : "pavani",
//     age : 21 ,
//     gender : "Female",
//     city : "Tirupati"
// }

// let user1 = {
//     salary : 20000,
//     phno : 6281574356,
//     color : "pink",
//     age : 21
// }

//! keys()
// console.log(Object.keys(user)); //! (4) ['username', 'age', 'gender', 'city']
// console.log(Object.keys(user1));//! (4) ['salary', 'phno', 'color', 'age']

// //! values()
// console.log(Object.values(user));//! (4) ['pavani', 21, 'Female', 'Tirupati']
// console.log(Object.values(user1));//! (4) [20000, 6281574356, 'pink', 21]

// //! assign() -- like concatination
// console.log(Object.assign(user,user1)); //! {username: "pavani", age : 21, salary : 2000,...}

//! seal() -- only updating possible,but not adding, delete
// Object.seal(user)
// user.salary = 30000
// user.age = 27
// delete user.gender
// console.log(user);
//! isSealed ()
// console.log(Object.isSealed(user)); //! true

//! freeze() -- upadating,adding,deleting not possibe

// Object.freeze(user)
// user.salary = 60000 //todo adding
// user.age = 50 //todo updataing
// delete user.gender //todo deleting
// console.log(user); //! {username: 'pavani', age: 21, gender: 'Female', city: 'Tirupati'}
// console.log(Object.isFrozen(user)); //! true

//! entries() -- Convert Object to arrays

let user = {
    username : "pavani",
    age : 21 ,
    gender : "Female",
    city : "Tirupati"
}
console.log(Object.entries(user));//! (4) [Array(2), Array(2), Array(2), Array(2)]

let arr = [["emp","pav"],["sal",50000],["gender","female"]]
console.log(arr);//! (3) [Array(2), Array(2), Array(2)]


//! fromentries() -- Converts array to Object
console.log(Object.fromEntries(arr)); //! {emp: 'pav', sal: 50000, gender: 'female'}


//! defineProperty -- used to define one property
console.log(Object.defineProperty(user,
    'age',
    {
        value : 30,
        
    }
));

//! defineProperties -- used to define more than one property
console.log(Object.defineProperties(user,{
    'age': {
        value : 45
    },
    'city' : {
        value : 'ANT' 
    },
    'color':{
        value : 'blue'
    }
}));
// console.log(user);


