/*
Dados: idade, carteira, carro, alcool
Defina se a pessoa pode dirigir.

*/

let idade = 23
let carteira = true
let carro = true
let alcool = false

if (idade >= 18 && carteira === true && carro === true && alcool === false ) {
    console.log('Voce Pode Dirigir!!')
}else {
    console.log('Voce Não Pode Dirigir')
}