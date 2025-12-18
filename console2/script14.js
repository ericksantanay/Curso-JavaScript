/*
Maior número

Dado um array, mostre o maior valor.
*/

let num = [1000, 50, 20, 545, 900, 8 , 99, 9999]
let maior = num[0]

for (let i = 1; i < num.length; i++) {
    if (num[i] > maior) {
        maior = num[i]
    }
}

console.log(maior)
