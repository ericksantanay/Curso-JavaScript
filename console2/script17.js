/*
Soma condicionada

Dado um array, some apenas os números maiores que 10.
*/

let num = [22, 45, 10, 3, 12, 9, 100]
let indice = 0
let conta = 0

for(n of num) {
    if (n > 10) {
        indice++
        conta = conta + n
    }
    
}
console.log(conta)
