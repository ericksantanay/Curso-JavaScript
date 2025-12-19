/*
Desafio

Dado um array de idades, diga quantas pessoas podem dirigir.
*/

let idades = [10, 30, 50, 22, 8, 18]


let indice = 0

for(i of idades) {
    if (i >= 18) {
        indice++
    }
        
}
console.log(indice)
