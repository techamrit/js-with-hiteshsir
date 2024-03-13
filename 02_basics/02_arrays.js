const marvel_heros = ["caption","thor","hulk","spiderman"]
const dc_heros = ["Superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.table(marvel_heros)
// console.log(marvel_heros[4][2])

// const both_hero = marvel_heros.concat(dc_heros) 
// console.log(both_hero);

const all_heros = [...marvel_heros, ...dc_heros]//sprading
// console.log(all_heros);


const another = [1,2,3,4,5,[4,3,2,1],[6,7,8,[9,10]]]

const real_another = another.flat(Infinity)
// console.log(real_another);
// console.log(real_another);

// const amrit = Array.isArray("AMRIT")
// console.log(Array.isArray("amrit")); //is array is avalavil or not (true or false)
// console.log(Array.from("amrit"))// convert in array like ("a","m","r","i","t")

// console.log(Array.from({name:"amrit"}))//interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //for convert in array
