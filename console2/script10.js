/*
Média

Dado um array de notas, calcule a média.
*/

let notas = [5, 7, 10, 8]

let conta = 0

let media = 0

for(n of notas) {

conta = (conta + n)  

}

media = conta / 4
console.log(media)
