"use strict"
/*one way for function
function myName (){
    console.log("a");
    console.log("m");
    console.log("r");
    console.log("i");
    console.log("t");
}
myName() 
*/ 

/* second way for write function
function addTwoNumber (num1,num2){
    console.log(num1 + num2);
}
addTwoNumber(5,7)

*/
/* Third way for write code 
function thirdWay(num1 , num2){
    let result=num1 + num2;
    return result
}
const result= thirdWay(5,7);
console.log("Result", result);*/


// function addThreeNum (num1,num2,num3,num4){
//     let results = num1+num2+num3-num4;
//     return results;
// }
// const result =addThreeNum(5,7,3,6)
// console.log("result", result);


/* function addThreeNum(num1,num2,num3){
    return num1+num2+num3
}
const result =addThreeNum(3,5,6)
console.log("result", result);
*/
/*
function loggedIn(username){
    return `${username} just logged in`;
}
console.log(loggedIn("amrit"))//amrit just logged in 
console.log(loggedIn(""))// just logged in 
console.log(loggedIn())//undefined just logged in 
*/

function loggedIn(username){
    if(!undefined){
        console.log("plese enter user name");
        return
    }
    return `${username} just logged in`;
}
console.log(loggedIn())//plese enter user nameundefined just logged in 
