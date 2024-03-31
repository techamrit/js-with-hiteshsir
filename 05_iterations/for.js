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

        console.log(`${i} * ${j} = ${i*j}`);
        
    }
}