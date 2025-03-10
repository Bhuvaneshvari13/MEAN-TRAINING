// //load the http module to create an Http server
// const http=require('http');
// //create an HTTP server and listen to requests on port 300
// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-type':'text/plain'});
//     res.end('Hello world\n');
// }).listen(3000,()=>{
//     console.log('server running at  http://127.0.0.1:3000/');

// })

// const fs=require('fs');
// //Asynchronous file reading using Libuv and nodeJs
// fs.readFile('example.txt','utf8',(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// })

// console.log("start");

// Promise.resolve().then(()=>{
//     console.log("Promise 1");
// });

// Promise.resolve().then(()=>{
//     console.log("Promise 2");
// });

// console.log("end");

console.log("start");

setTimeout(()=>{
    console.log("Timeout1");


setTimeout(()=>{
    console.log("Timeout2");
},3000);
},5000);

console.log("end");