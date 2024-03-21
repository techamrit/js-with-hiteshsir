//array
const myArr = [0, 1, 2, 3, 4, 5];
const friends = ["aman", "kapil", "raj"];

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.table(myArr[0])

//Array methods

myArr.push(6); //add 6 in after 5
// console.log(myArr)
myArr.push(7); //add 7 in after 6
// console.log(myArr)

myArr.pop(); //remove 7 in array
// console.log(myArr)

myArr.unshift(9); //add 9 in start before 0
// console.log(myArr)
// myArr.shift()
myArr.shift(); //remove 9 from starting
// console.log(myArr)

// console.log(myArr.includes(5))//retur value in boolean form (true/false)
// console.log(myArr.indexOf(9))//if true so print value or (-1)

const newArr = myArr.join(); //convert in string

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

//slice, splice

// console.log("A", myArr);
const myNewArr1 = myArr.slice(0, 5); //stack
// console.log(myNewArr1)
// console.log("B", myArr);

const myNewArr2 = myArr.splice(0, 5); //heap

console.log("c", myArr);

console.log(myNewArr2);

// const marvel_heros = ["caption","thor","hulk","spiderman","Iron", "antman"]
// const dc_heros = ["Superman","batman","flash" ,"amrit","manish","vivek"]

// const myNewArray4 = marvel_heros.slice(2,4)
// console.log(marvel_heros);
// console.log(myNewArray4);

// const myNewArray5 = dc_heros.splice(1,4)
// console.log(dc_heros);
// console.log(myNewArray5)
