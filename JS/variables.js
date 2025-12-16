

//!creating a variables using var

//!declaration
//?declaration
//todo declaration  /* colors for comments */

// var age; //!declaration
// console.log(age);

// age = 23; //!initialization
// console.log(age);

// age = 24; //!reinitialization
// console.log(age);

// var age; //!redeclaration
// console.log(age);

// var first_name = "Pavani"; //! declaration and initialization in single line
// console.log(first_name);

//! creating a variables using let keywprd

// let age; //!declaration
// console.log(age);

// age = 20; //!initialization
// console.log(age);

// age = 21; //!reinitialization
// console.log(age);

// let age; //todo redeclaration not possible

// let age = 50; //!declaration and initialization in sinle line
// console.log(age);


//! creating a variables using const keyword

// const age; //! declaration.initialization,redeclaration,reinitialization is not possibe
// age = 20;
// age = 23;
// const age;


// const age = 40; //!declaration and initialization in sinle line
// console.log(age);

//! hoisting (default behavior of js, moving declaration to the top of the scope)
// var age;
// console.log(age); //! undefined
// var age = 4;

//! TDZ (Temporal dead zone) --> zone where the variable (let, const) will be stored after declaration before initialization

// console.log(age); //! undefined
// var age = 20;
// console.log(age) //! 20

// console.log(age); //! error, cannot access before initialization
// const age = 20;
// let var = 22; //! error for let and const