//singleton
// Object.create// 

// object literals

const samSym = Symbol("quater")

const jsUser ={
    name:"amrit",
    "lastName":"pal",
    [samSym]:"quater",
    age:23,
    location:"ghaziabad",
    email:"amritp66@gmail.com",
    isLoggedIn:false,
    lastLOggedIN:["monday","tuesday"]
}


// console.log(jsUser.email)//step one

// console.log(jsUser["email"])//step two

// console.log(jsUser["lastName"])

// console.log(jsUser)
jsUser.name = "manish"
// console.log(jsUser["name"])

// Object.freeze(jsUser)// now our object is freez

jsUser.class = "fifth"
// console.log(jsUser);

jsUser.greeting =function(){
    console.log("hello Js")
}
// console.log(jsUser)

jsUser.greetingtwo = function(){
    console.log(`hello in js, ${this.name}`)
}
console.log(jsUser.greetingtwo())
console.log(jsUser.greeting())
