//Filtrar números pares
let numeros = [2, 5, 4, 20, 10, 3];
let pares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  }
}

console.log(pares);
