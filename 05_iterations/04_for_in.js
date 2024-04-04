 //for in

 const myObject={
    js:"javaScript",
    cpp:"cplusPlus",
    rb:"ruby",
    swift:"swift by apple"
 }
 for (const tea in myObject) {
//    console.log(`${tea} :- shortcut in my object ${myObject[tea]}`);
 }

 const proggraming=["js","py","ry","cpp","swfit"];

 for (const program in proggraming) {
//    console.log(proggraming[program]);
 }

 const map = new Map();
 map.set("In","India");
 map.set("fr","france");
 map.set("swift","swift by apple");

 for (const key in map) {
    console.log(key);
 }