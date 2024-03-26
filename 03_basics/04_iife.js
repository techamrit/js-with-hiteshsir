// Immediately Invoked Function Expressions (IIFE).An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// function chai (){
//     console.log("DB Connect");
// }
// chai()


(function chai (){
     // named IIFE
    console.log("DB Connect");
})();   //this sentex is iife and (;)this is important for next iife and this is named iife

((name)=>{
    console.log(`DB Connect Second ${name}`);

})("amrit");  //inerview (globel scope ka poloution sa problem hoti hai kai baar  tho us globel scope ka jo variable hai jo bi vaha declearation hai us ka plouation ko hatana ka liya iife ka use kiya hia)

