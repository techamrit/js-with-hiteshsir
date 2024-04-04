// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )//forEach return nahi kartha kuch.

// this is first way;

 const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((item) => {
//     return item > 4
// })
// console.log(newNums);

// second way by forEach

// const newNum =[];
// myNums.forEach((num)=>{
//     if(num>6){
//         newNum.push(num)
//     }
// // })
// const newNum = [];
// myNums.forEach( (num)=>{
//     if(num>=6){
//         newNum.push(num)
//    }
// } )
// console.log(newNum);//this is long way

const books=[
    {Contents:"Classics",Name:"The Guide", publish: 1958,Edition: 1960},
    {Contents:"Classics",Name:"Malgudi Days", publish: 1943,Edition: 1960},
    {Contents:"History",Name:"EARLY INDIA", publish: 1300,Edition: 1900},
    {Contents:"History",Name:"FROM PLASSEY TO PARTITION", publish: 1757,Edition: 1947},
    {Contents:"Romance",Name:"THE GIRL OF MY DREAMS", publish: 1970,Edition: 1999},
    {Contents:"Romance",Name:"IT’S ALL IN THE PLANETS", publish: 1918,Edition: 1910},
    {Contents:"Chick-lit",Name:"TRUST ME ", publish: 1954,Edition: 1990},
    {Contents:"Chick-lit",Name:"PIECE OF CAKE", publish: 1980,Edition: 2014},
    {Contents:"Self-Help",Name:"THE MONK WHO SOLD HIS FERRARI", publish: 1948,Edition: 1960},
    {Contents:"Self-Help",Name:"WHO WILL CRY WHEN YOU DIE?", publish: 1738,Edition: 1960},
    {Contents:"Humour",Name:"Serious Men ", publish: 1788,Edition: 1890},
    {Contents:"Humour",Name:"THE COMPETENT AUTHORITY", publish: 1968,Edition: 1990},
    {Contents:"Thriller and Mystery",Name:"SPY IN THE AMBER", publish: 1158,Edition: 1260},
    {Contents:"Thriller and Mystery",Name:"SACRED GAMES ", publish: 1238,Edition: 1980}
];

let userBooks=books.filter((book)=> book.publish>1400)

//  userBooks=books.filter( (book)=>{ 
//    return book.publish>1950 && book.Edition>=1947 && book.Name === "THE GIRL OF MY DREAMS"
// } )
console.log(userBooks);