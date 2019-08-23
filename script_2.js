// Calcule simple d'un nombre factorielle

console.log("Exercice 2 , Nombre Factorielle");
let inputNumber = prompt('De quel nombre (entier) veux-tu calculer la factorielle ? Petit exemple rapide : factorielle(5) = 5*4*3*2*1 et factorielle(10) = 10*9*8*7*6*5*4*3*2*1');
let total = 1;

for (i = 0; i < inputNumber; i++){
    total = total * (inputNumber - i);
}

console.log('Le résultat est : ' + total);
