const score = 500
// console.log(score)

const balance = new Number(700)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2))

const otherNumber = 123.12345
// console.log(otherNumber.toPrecision(6))

const morNumber = 100000000
// console.log(morNumber.toLocaleString('en-IN'))

// *******************************Maths***********************************

// console.log(Math)
// console.log(Math.abs(-5))//5
// console.log(Math.round(4.2))//4
// console.log(Math.round(4.6))//5
// console.log(Math.ceil(4.8))//5
// console.log(Math.floor(4.2))//4 
// console.log(Math.min(1,2,3,4,5,6,7,8,9))//1
// console.log(Math.max(1,2,3,4,5,6,7,8,9))//9


console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min)
