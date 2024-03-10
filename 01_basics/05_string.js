const myName = "amrit"
const myRepo = 5
// console.log(myName + myRepo + "values")

// console.log(`hello my name is ${myName} and my repo is ${myRepo} `)

const gameName = new String("amritji")
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))
 
const anotherName =  gameName.substring(1,4)  
console.log(anotherName)

const newString =gameName.slice(1,5)
console.log(newString)

const oneNewString = "    amrit-pal   "
console.log(oneNewString)
console.log(oneNewString.trim())//this is for space trimer

const url = "https://amrit.com/amrit%20pal"
console.log(url.replace('%20', '-'))//remove "%20" and add "-"

console.log(url.includes('aman'))//false
console.log(url.includes('amrit'))//true