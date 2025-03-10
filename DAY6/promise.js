// const fetchData=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("Data Received"),2000);
// });
// fetchData.then(data=>console.log(data));

//ES7 NEW FEATURE 1
// const number=[1,2,3,4];
// console.log(number.includes(3));

// //ES7 NEW FEATURE 2---->exponential operator
// console.log(3**3);

// //ES8 ASYNC/AWAIT
// const fetchData=async()=>{
//     return "Hello world"
// };
// fetchData().then(console.log);

// //CONVERTS OBJECT INTO ARRAYS
// const user={name:"Alice",age:30};  //{name:"Alice",age:30} --->This is object literals.
// console.log(Object.entries(user));
// console.log(Object.values(user));
// console.log(Object.keys(user));

// //String Padding->(padStart and padEnd)
// console.log("5" .padStart(3,"0"));
// console.log("5" .padEnd(3,"0"));
// console.log("JavaScript" .padStart(13,"!"));
// console.log("Hllo" .padEnd(7,"e"));

//ES9
fetchData()
.then(data=> console.log(data))
.catch(error=>console.error(error))
.finally(()=> console.log("Complete"));