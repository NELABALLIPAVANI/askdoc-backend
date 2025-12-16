
// let arr = [10,20,3,7]
// console.log(arr); //! Array(4)

// let arr1 = [10,"hello",true,null]
// console.log(arr1);

// //! adding new element to an array

// arr[4] = "bye"
// console.log(arr1);

// //! updating element in an array
// arr1[2] = false

// //! deleting element from an array
// delete arr1[0]

// console.log(arr1[1]);//! hello
// console.log(arr1); //! (4) [empty, 'hello', false, null]
// console.log(arr1[-1]); //! undefined

// let arr2 = new Array ("hello")
// let arr3 = new Array (10)
// let arr4 = new Array (10,20,"hello")

// console.log(arr2); ["hello"]
// console.log(arr3); //! (10) [empty × 10]
// console.log(arr4); //! (3) [10, 20, 'hello']
// console.log(arr4[1]);//! 20

// arr4[4] = "bye"
// arr4[2] = true
// delete arr4[0]
// console.log(arr4); //! (5) [empty, 20, true, empty, 'bye']

// let arr = ["Bhavana","sowmya","pavani","deepthi","ganga"]
// console.log(arr);
// //! returns length of an array
// console.log(arr.length);

// //! add elements at the end of an array
// arr.push("kusuma","jyo","sneha")
// console.log(arr);

// //! remove element at the end of an array
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr);

// //! add element at the starting of an array element
// arr.unshift("bindu","hema")

// //! remove element at the startin of an array element
// arr.shift()
// arr.shift()
// arr.shift()
// console.log(arr);

// //! concat() --> combine or add two or more
// let arr2 = ["prashu","meghana"]
// console.log(arr.concat(arr2, [10,20]));
// console.log(arr)

// let arr3 = ["Bhavana","sowmnya","pavani","sowmya","bhavi","sowmya","pavani","pavi"]
// console.log(arr3.at(1));
// console.log(arr3.at(-1));

// console.log(arr3.indexOf("pavani"));
// console.log(arr3.lastIndexOf("pavani"));

// console.log(arr3.includes("pavi")); //! true
// console.log(arr3.includes("prassu")); //! false

// console.log(arr3.join()); //! removes square brackets (Bhavana,sowmnya,pavani,sowmya,bhavi,sowmya,pavani,pavi)
// console.log(arr3.join("")); //! Bhavanasowmnyapavanisowmyabhavisowmyapavanipavi
// console.log(arr3.join(" ")); //! Bhavana sowmnya pavani sowmya bhavi sowmya pavani pavi

// console.log(arr3.fill()); //! undefined
// console.log(arr3.fill(0)); //! [0, 0, 0, 0, 0, 0, 0, 0]
// console.log(arr3.fill("a")); //! ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
// console.log(arr3.fill("hello")); //! ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
// console.log(arr3.fill("true")); //! ['true', 'true', 'true', 'true', 'true', 'true', 'true', 'true']
// console.log(arr3.fill(true)); //! ) [true, true, true, true, true, true, true, true]

//! slice()
// let arr = ["Bhavana","sowmya","pavani","deepthi","ganga","pavitra","kalyani","sashi"]

// console.log(arr.slice(2,4)); //! (2) ['pavani', 'deepthi']
// console.log(arr.slice(-4,-2));//! (2) ['ganga', 'pavitra']
// console.log(arr.slice(-6,-4));//! (2) ['pavani', 'deepthi']
// console.log(arr.slice(1,-5));//! (2) ['sowmya', 'pavani']
// console.log(arr.slice(-5,5));//! (2) ['deepthi', 'ganga']
// console.log(arr.slice(-8,-6));//! (2) ['Bhavana', 'sowmya']

// //! splice()
// let arr1 = ["Bhavana","sowmya","pavani","deepthi","ganga","pavitra","kalyani","sashi"]

// arr1.splice(2,2) //! starting index to delete and second index to delete how many to dtl length
// console.log(arr1); //! (6) ['Bhavana', 'sowmya', 'ganga', 'pavitra', 'kalyani', 'sashi']
// arr1.splice(1,2,"swetha") //! third index is to add in the place of dlt index or element
// console.log(arr1); //! (5) ['Bhavana', 'swetha', 'pavitra', 'kalyani', 'sashi']
// console.log(arr1);//! (6) ['Bhavana', 'swetha', 'pavitra', 'pavi', 'kalyani', 'sashi']

//! flat()
// let arr = [10,20,[30,40,[50,60,[70,80,[90]]]]]
// console.log(arr.flat()); //! (5) [10, 20, 30, 40, Array(3)]
// console.log(arr.flat(1));//! (5) [10, 20, 30, 40, Array(3)] - 0,1 same ouput
// console.log(arr.flat(2));
// console.log(arr.flat(3));
// console.log(arr.flat(4));


//todo Higher Order Methods (HOM)
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
// let arr = [10,7,30,50,2]

// let res = arr.some((val)=>{
//     return val % 2 ==0
// })
// console.log(res);//! true

// //! every() --> gives true when all satisfy
// let res1 = arr.every((val)=>{
//     return val%2 ==0
// })
// console.log(res1); //! false

//! sort()
// let arr1 = [10,7,30,50,2,98,34]

// let res = arr1.sort((a,b)=>{
//     return a-b
// })
// console.log(res); // todo (7) [2, 7, 10, 30, 34, 50, 98]-- asc

// let res1 = arr1.sort((a,b)=>{
//     return b-a
// })
// console.log(res1); //todo (7) [98, 50, 34, 30, 10, 7, 2]-- desc

//! map()
// let arr = [10,7,30,50,2,97,31]

// let res = arr.map((val)=>{
//     return val * 2
// })
// console.log(res);//todo (7) [20, 14, 60, 100, 4, 194, 62]

//! filter()
// let res1 = arr.filter((val)=>{
//     return val % 2 ==0
// })
// console.log(res1); //todo (4) [10, 30, 50, 2] - gives only divisible values

// //! reduce()
// let res3 = arr.reduce((acc,val)=>{
//     return acc + val
// })
// console.log(res3); //! 227

// let res4 = arr.reduce((acc,val)=>{
//     return acc + val
// },100) //! if we pass value here then accumulator starts from 100 orelse 0
// console.log(res4);//! 327

//! reverse()
// let arr5 = [1,2,3,4,5]
// console.log(arr5.reverse()); //! (5) [5, 4, 3, 2, 1]
// console.log(arr5); //! (5) [5, 4, 3, 2, 1]


let arr6 = [1,2,3,4,5]
let a = arr6.map((val)=>{
    //  val += 1;
     return val *2
})
    
console.log(a);