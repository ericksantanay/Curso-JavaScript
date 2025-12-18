/*Busca simples

Dado um array e um número, diga se ele existe no array.
*/
let escolha = 55

let num = [43, 55, 9, 10, 344, 244]
indice = 0

for(n of num) {
    if (escolha === n) {
        indice++
        console.log(n)
    }else {
        console.log('Não Temos esse número')
    }
}


