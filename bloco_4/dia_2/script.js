let numeros = [1,2,3,4,5,6];
let megaSena = [];
let numCertos = 0;

for(let i = 0; i < 6; i++){
  let num = Math.floor(Math.random() * 60) + 1;
  megaSena.push(num)
}

for(let i = 0; i < megaSena.length; i++) {
  let drawNum = megaSena[i];
  
  for(let index = 0; index < numeros.length; index++){
    let meusNum = numeros[index];

    if(drawNum === meusNum){
      numCertos ++;
    }
  }
}

console.log("Números da Mega: " + megaSena)
console.log("Seus números: " + numeros)
console.log("Acertos: " + numCertos)
