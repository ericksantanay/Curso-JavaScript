/*
Contar pares

Dado um número, mostre quantos números pares existem entre 1 e ele.
*/

let num = 10

let cont = 0

for(let i = 1; i <= num; i++) {
    cont += i % 2 === 0  
}

console.log(`Tem ${cont} Numeros Pares`)