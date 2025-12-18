/*Busca simples

Dado um array e um número, diga se ele existe no array.
*/
let escolha = 5
let num = [43, 55, 9, 10, 344, 244]

let achou = false

for (let n of num) {
    if (n === escolha) {
        achou = true
    }
}

if (achou) {
    console.log(`O número ${escolha} existe no array`)
} else {
    console.log(`O número ${escolha} não existe no array`)
}

