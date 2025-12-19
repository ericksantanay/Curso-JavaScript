/*
Segundo maior

Dado um array de números, mostre o segundo maior valor.
*/

let num = [2, 4, 8, 10]

let maior = -Infinity
let segundoMaior = -Infinity

for (let n of num) {
    if (n > maior) {
        segundoMaior = maior
        maior = n
    } else if (n < maior && n > segundoMaior) {
        segundoMaior = n
    }
}

console.log(segundoMaior)




