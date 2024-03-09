//primitive

// 7 Type of primitive 
// 1.string, 2.Number, 3.Boolean, 4.null, 5.undfined, 6.symbol, 7BigInt

const string1 = "amrit"//string
const number2 = 100;//number
const boolean3 = false;//boolean
const nullOutsideTemp4 = null;//null
let unknown = undefined;//undefined
const symbol6 = Symbol("amrit");//Symbol
const Bignumber = 12345678909897654321n;//BigINt
//console.log(typeof (Bignumber)); //typeof

//Refrence (Non-primitive)

//1. Array, 2.Object, 3.Function
//arary
const names=["amrit","aman", "raj","kapil"]; //function object

//Object
let myObj = {
    name:"amrit",
    id:1234,
    addres:"mohan nagar"
}//function object

const myFunction = function(){
    console.log("hello world")
};                                  //object Function
console.log(typeof (let))
// console.log(typeof (const))
// console.log(typeof (var))

//below mention code for read 
// https://262.ecma-international.org/5.1/#sec-11.4.3