// let player = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3
//   },
//   bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
// };

// console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");
// console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor jogadora do mundo por " + player.bestInTheWorld.length + " vezes.");

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge' 
// };

// for(let msg in names){
//   console.log("Olá " + names[msg])
// }

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let key in car){
  console.log(key +": " + car[key])
}
