/*
Pedido urgente

Dados: valor, urgente, estoque
Defina o status do pedido.

*/

let valor = 10050
let urgencia = true 
let estoque = 90000

if (valor >= 5000 && urgencia === true && estoque >= valor) {
    console.log('Pedido Urgente')
}else if (valor >= 5000 && urgencia === true && estoque < valor) {
    console.log('Não temos essa quantidade no estoque')
}else {
    console.log('Esse pedido não é urgente')
}