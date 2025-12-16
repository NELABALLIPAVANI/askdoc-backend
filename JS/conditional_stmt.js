//!if statement

// let num =11
// if(num%2 ==0){
//     console.log(num + "is an even number");
// }

// //! if else statement

// let num1 =11
// if(num%2 ==0){
//     console.log(num + "is an even number"); 
// }
// else{
//     console.log(num + " is an odd number");   
// }

// //!else if ladder

// let marks =105
// if (marks > 100){
//     console.log("Please enter marks below 100");
// } 
// else if(marks > 90) {
//     console.log("Grade A");
// }
// else if(marks > 80) {
//     console.log("Grade B");
// }
// else if(marks > 70) {
//     console.log("Grade C");
// }
// else if(marks > 60) {
//     console.log("Grade D");
// }
// else{
//     console.log("Fail");
// }

//!Switch case

// let day =1;
// switch(day){
//     case 0 :
//         console.log("Sunday");
//     break;
//     case 1 :
//         console.log("Monday");
//     break;
//     case 2 :
//         console.log("Tuesday");
//     break;
//     case 3 :
//         console.log("Wednesday");
//     break;
//     case 4 :
//         console.log("Friday");
//     break;
//     case 5 :
//         console.log("Saturday");
//     break;
//     default:
//         console.log("Enter above 0 and below 5");
        
// }

//!Nested stmt

// let char = prompt(Enter Alphabet);

// switch(char){
//    case 'a':
//    case 'e':
//    case 'i':
//    case 'o':
//    case 'u':
//      console.log("Vowels");
//    break
//    default:
//         console.log("consonent");
// }
        
// let day = prompt("Enter Alphabet")
// switch(day) {     
//     case 'e':
//         console.log("vowel");
//     break;
//     case 'i':
//         console.log("vowel");
//     break;
//     case 'o':
//         console.log("vowel");
//     break;
//     case 'u':
//         console.log("vowel");
//     break;
//     default:
//         console.log("consonent");  
        
// }

// let ch = prompt("Enter alphabet").toLowerCase()

// switch(true){
//     case (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'):
//         console.log(ch + " is a vowel");
//     break;
//     default:
//         console.log(ch + " is a consonent");    
        
// }

//!Nested stmt

// let num = prompt("Enter number")

// if (num%2==0){    
//     if(num < 0){
//         console.log("Even num and Positive num");
//     }
//     else{
//         console.log(" Even num and Negative num");   
//     }
// }
// else{ 
//     if(num >=0){
//         console.log("Odd num and Positive");
        
//     }
//     else{
//         console.log("Odd num and Negative");
        
//     }
// }


let a = prompt("Enter no1")
let b = prompt("Enter no2")
let c = prompt("Enter operator")

if((c == "+")|| (c == "Addition")){
    res = Number(a) + Number(b)
    console.log(res);
}
else if((c == "-")||(c == "Subtraction")){
    console.log(a - b);
}
else if((c == "*") || (c == "Multiplication")){
    console.log(a * b);
}
else if(c == "/"){
    console.log(a / b);
}
else if(c == "**"){
    console.log(a ** b);
}