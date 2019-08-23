// Pyramide de Super-Mario

console.log("Exercice 3");

var etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
console.log(`Vous avez choisi de mettre ${etage} étages.`)

var arr_1 = [];
var symbol = "#";
var space = " ";

function pyramide(input1) {
  let rep = 1;
  for(input1; input1 >= 1; input1--){ 
  console.log(space.repeat(input1 -1) + symbol.repeat(rep));
  rep++
  }
}

pyramide(etage);