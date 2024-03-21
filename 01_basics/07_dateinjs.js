//date

let myDate = new Date();
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let creatMyDate = new Date(2023, 0, 23)
// let creatMyDate = new Date(2023, 0, 23,5,3)
// let creatMyDate = new Date("2023-01-12")
let creatMyDate = new Date("05-15-2023"); //(month-day-year)
// console.log(creatMyDate.getTime())

let myTimeStmp = Date.now();
// console.log(myTimeStmp)
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)
newDate.toLocaleString("default", {
  weekday: "long",
});
