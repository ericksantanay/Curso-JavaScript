/*
Soma acumulada

Dado um array, mostre a soma acumulada passo a passo.
*/

let num = [1, 3, 5, 10, 20, 30]

let soma = 0

for(n of num) {
    soma = soma + n

    console.log(soma)
}