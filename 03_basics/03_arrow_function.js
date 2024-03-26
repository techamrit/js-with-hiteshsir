const user ={
    userName:"amrit",
    price:999,

    welcomeMessage:function(){
        // console.log(`${this.userName} ${this.price},"welcome to website"`);
        console.log(this)
    }
}
//this is only work in object carliBraces
// user.welcomeMessage()
user.userName="manish"
// user.welcomeMessage()
// console.log(this)

function simpleFunction(){
    let userName="Amrit"
    // console.log(this.userName)
}
simpleFunction()

const holdFunction=function(){
    let userName= "amrit"
//     console.log(this.userName);//output is undefined
//     console.log(userName);// output is amrit
}
holdFunction()


//expliciti return
const arrowFunction = () => {
    let userName = "amrit3";
    // console.log(this.userName);// undefined
    // console.log(userName);// amrit3
    // console.log(this);//{}
}
arrowFunction()


//expliciti return
const addTwoNumExpliciti =(num1,num2)=>{
    return num1 + num2
}
// console.log(addTwoNum(5,7));

const addTwo = (num1,num2)=> num1 +num2
// console.log(addTwo(3,6));

//impliciti return
const addThree =(num1,num2,num3)=>(num1+num2+num3)//if we use ()we do not need to return
// console.log(addThree(3,6,7));

const objectArrowFunction = ()=>({userName:"amrit"})
console.log(objectArrowFunction());