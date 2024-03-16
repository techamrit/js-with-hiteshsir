/*singleton 

*/
const tinderUser = new Object()
// const tinderUser = {}
// console.log(tinderUser);
tinderUser.id="abc123"
tinderUser.email="amritp662@gmail.com"
tinderUser.loggedIn = false
// console.log(tinderUser);

const  regularUser = {
    email:"amritp662@gmail.com",
    fullName:{
        UserName:{
            firstName:"amrit",
            lastName:"pal"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullName.UserName.lastName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

// const target = {obj1,obj2}//first way
// console.log(target);

/*const target =Object.assign({},obj1,obj2)
console.log(target);*/ //second way

const target ={...obj1, ...obj2, ...obj3}
// console.log(target);

const users = [
    {
        id:1,
        email:"aalskdj12f3f@gmail.com"
    },
    {
        id:2,
        email:"balskdj12f3f@gmail.com"
    },
    {
        id:3,
        email:"calskdj12f3f@gmail.com"
    }
]
// console.log(users[1]["email"]);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('id'));
console.log(tinderUser.hasOwnProperty('name'));