// For Loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let i = 0; i <= 10; i++) {
    // const element = i;
    // console.log(element);
    // console.log(i);
}

for (let i = 0; i <=10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`${i} is detect`);
    }
    // console.log(element);
}

for (let i = 0; i <=2; i++) {
    const element = i;
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
        const element = j;
        // console.log(`inner loop value: ${j}`);

        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
}
let myArray = ["amrit","manish","kakku"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

//break 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i==6){
        // console.log(`ditect 6`)
        break;
    }
    // console.log(`value of i is ${i}`);
}
//and contioue
for (let index = 0; index <=20; index++) {
    const element = index;
    if (index==10) {
        console.log(`five skip`);   
    }
    console.log(`value of ${index}is skip`);
}