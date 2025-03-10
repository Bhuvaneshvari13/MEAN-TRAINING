// const fs=require('node:fs') //filesystem module that is predefined
// const content='some content';

// //require is used to import the module in the file
// fs.writeFile("message.txt",content,err=>
// {
//     if(err){
//         console.error(err);
//     }
//     else{
//         //success
//     }
// }
// );

// let name="John"; //block-scoped
// const PI=3.14;
// console.log(name);
// console.log(PI)

//arrow function decrease the line of code as compared to javascript and it is denoted with arrow =>
//     const add = (a,b) => a+b;
// console.log(add(5,3));

// function add(a,b){
// return a+b;
// }
// console.log(add(5,3));

// const name1="Alice";
// console.log(`Hello, ${name1}`);

//Destructuring

// const person={
//     name:"Bob", age:25
//              }//object literals
// const {name,age}=person;
// console.log(name,age)

// //Array prototype-flat
// const arr=[1,[2,[3,[4]]]]
// console.log(arr.flat(2));

//ES11 introduced
let value=null??"Default"
console.log(value);

//optional chaining
const user={
    profile:{name:"Alice"}
}
console.log(user.profile?.name);
console.log(user.address?.city);