const coding=["js","cpp","java","python","ruby"];
// coding.forEach( function(item){
//     console.log(item);
// } )

// coding.forEach((item)=>{
// console.log(item);
// } )

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// } )

const myCoding=[
    {
        languageFileName:"js",
        languageFile:"javascript"
    },
    {
        languageFileName:"java",
        languageFile:"java"
    },
    {
        languageFileName:"py",
        languageFile:"python"
    }
]

myCoding.forEach( (item)=>{
    // console.log(item.languageFileName);
    console.log(item.languageFile);
} )