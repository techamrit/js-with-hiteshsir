const myNumber= [1,2,3];

// const newNum = myNumber.reduce( function (previousValue,currentValue){
//     console.log(`previousValuie is :-${previousValue}  + curentValue:-${currentValue} = ${previousValue+currentValue}`);
//     return previousValue+currentValue
// },0 );

// accumulator,currentValue,initialValue
const newNum = myNumber.reduce( (preVal,currVal)=>preVal+currVal,0 )


// console.log(newNum);

const soppingCart = [
    {
        price:20,
        course:"js"
    },
    {
        price:10,
        course:"py"
    },
    {
        price:30,
        course:"data science"
    }
]

const payToCousre = soppingCart.reduce( (preVal,currVal)=>preVal+currVal.price,0);

console.log(payToCousre);