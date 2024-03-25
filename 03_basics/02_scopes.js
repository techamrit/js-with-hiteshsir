// var a=1;
let a=2;
const b=3;

    if(true){
        let a =10;
        const b =20
        // console.log("inner-a", a)
        // console.log("inner-b", b)
    }

//      console.log("outer-a",a)
//  console.log("outer-b",b)
//  console.log(c)


// dom (document object model)
// Nested loop 
// under stand like  a one is younnger brother and two is elder brother leder brother can take icecream from younger brother but younger brother can't
function one(){
   const userName ="amrit"
    function two(){
        const website = "youtube"
        console.log(`${userName} ${website}`);
    }
    // console.log(website);
    // two()
}
// one()

if (true) {
    const userName ="amrit"
    if (userName==="amrit") {
        const website = "youtube"
        // console.log(`${userName} ${website}`)
    }
    // console.log(website);
}
// console.log(userName);
console.log(addOne(4));
function addOne(num){
    return num + 1
}//output is 5

// **********************intresting***************
// exprasion

// console.log(addTwo(5));//'addTwo' before initialization 
const addTwo = function(number){
    return number + 2
}
// console.log(addTwo(5)); this is working output is 7