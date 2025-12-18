/*
Reprovados

Dado um array de notas, mostre quantos alunos foram reprovados.
*/

let notas = [5, 6, 3, 10, 2, 4]
let media = 5 
let c = 0

for(n of notas) {
    if (n < media ) {
        c++
    }
}

console.log(c)








