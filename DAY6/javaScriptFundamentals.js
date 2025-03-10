// //declaring variables-->
//         * var (block scope)- can be redeclared, gets hoisted but  with undefined value.
//         * let 
//         * constant

// function exVar(){
//     var x=10;
//     console.log(x);
// }
// if(true){
//     var  x=20;
//     console.log(x); //gets updated
// }

// exVar();
// // console.log(x); //no block-scope

// function example(){
//     const x=10;
//     console.log(x);

//     if(true){
// const y=20;
// console.log(x);
//     }
//     console.log(x)
// }
// example();

// function example(){
//     let x=10;
//     console.log(x);

//     if(true){
// let y=30;
// console.log(x);
//     }
//     console.log(x)
// }
// example();

// const person={name:"John",age:25};
// person.age=30;
// console.log(person);

function createCounter(){
    let count=0;
    return {
        inc:function(){
            count++;
            console.log(`inc:${count}`);
        },

        dec:function(){
            count--;
            console.log(`dec:${count}`);
        },

        getCount:function(){
            console.log(`current count:${count}`);
        }
    }
}