
// const UserName= "amrit";//got a username
// const UserName= "";false
// const UserName= {};true
// const UserName= [];//true


// if (UserName) {
//     console.log("Got a username" );
// }else{
//     console.log("not user name get");
// }

// falsy value 

//false ,0 ,-0, BigIt (0n),"",null, undefined, Nan;

// truety value 

// "0", 'false', " ", [], {}, function(){}

const UserName= [];//true

// if (UserName.length===0) {
//     console.log("array is empty" );
// }else{
//     console.log("not user name get");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("obj is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val;
val = 5??10;
let val1 = null?? 10;
let val2 = undefined ?? 15
let val3 = null ?? 10 ??20

// console.log(val);
// console.log(val1);
// console.log(val2);
// console.log(val3);


// Terniary Operator

// condition ? true : false

 
const iceCremPrice = 100;

iceCremPrice <=80 ? console.log("less then 100") : console.log("more than 80"); 
