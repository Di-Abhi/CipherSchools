// var x = 15;
// {
//     let x =5;
//     console.log(x);
// }
// console.log(x);

const { resolve } = require("styled-jsx/css");

// var x= function(x,y){
//     return x+y;
// }
// console.log(x(5,6));

// const x = (x,y)=> x+y;
// console.log(x(5,6));

// const q1 = ["Jan","Feb","Mar"];
// const q2 = ["Apr","May","Jun"];
// const q3 = ["Jul","Aug","Sep"];
// const q4 = ["Oct","Nov","Dec"];

// const year =[...q1, ...q2, ...q3, ...q4];
// console.log(year);

// const myNumber = [25,12,50,77,-1];

// // let maxValue = Math.max(...myNumber);
// // console.log(maxValue);

// let sum = 0;
// for(let num of myNumber){
//     sum = sum+num;
// }
// console.log(sum);

// const name = "CipherSchools";

// let text = "";
// for(let ch of name){
//     text+=ch+" ";
// }
// console.log(text);

// const fruits = new Map([

//     ["apples", 500],
//     ["bananas",300],
//     ["oranges",200]
// ]);
//  console.log(fruits);
// console.log(fruits.get("oranges"));

// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("a");
// console.log(letters);

// class Car{
//     constructor(name,mfgYear){
//         this.name=name;
//         this.mfgYear=mfgYear;
//     }
// }

// const myCar1 = new Car("Mercedes",2022);
// const myCar2 = new Car("Porsche",2020);

// console.log(myCar1,myCar2);

// const myFunction =()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve();
//     },2000)
// })
// };

// myFunction()
// .then(()=>{
//     console.log("Resolved");
// })
// .catch(()=>{
//     console.error("Rejected");
// })

// const person={
//     firstName: "Abhishek",
//     lastName:"Kumar",
//     age: 20,
//     eyeColor: "black"

// }
// let id =Symbol("id");
// person[id]=140111;
// console.log(person);

// const addTwoNumbwers = (a,b=10)=>a+b;
// console.log(addTwoNumbwers(10))

// const addNumbers = (...args)=>{
//     let sum=0;
//     for(let arg of args){
//         sum+=arg;
//     }
//     return sum;
// }

// console.log(addNumbers(10,14,16,22,1,45));