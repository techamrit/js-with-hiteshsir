//for of
// ["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]
for (const myarr of arr) {
    // console.log(myarr);
}

const greeting="hello world"
for (const great of greeting) {
    if (great==" ") {
       
        continue
        // break;
    }
    // console.log(`value of greeting ${great}`);
}


const map = new Map();
map.set("In","india")
map.set("USA","united state of america")
map.set("Fr","france")
map.set("In","india")

// console.log(map);

for (const [key,value] of map) {
    // console.log(`value of ${key}:-${value}`);
}
const myobject={
    Name:"amrit",
    class:"12th"
}
for (const [key,value] of myobject {
    console.log(`key:- value`);
}