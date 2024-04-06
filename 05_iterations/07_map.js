const myNumbers = [1,2,3,4,5,6,7,8];

// const newNum = myNumbers.map((num)=>{ return num+10});

const newNum = myNumbers
                .map( (num)=> num*5 )
                .map( (num)=> num+2 )//chain mathod

console.log(newNum);