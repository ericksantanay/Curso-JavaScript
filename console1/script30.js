/*Loja
Dados: estoque, reservado
Defina o status do produto.
*/

let estoque = 21
let reservado = false

if (reservado === true) {
    console.log('O estoque está reservado')
} else if (estoque >= 10) {
    console.log('Estoque Disponível')
} else {
    console.log('Estoque em Falta')
}
