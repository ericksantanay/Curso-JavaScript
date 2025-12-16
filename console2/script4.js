/*
Conta bancária

Dados: saldo, bloqueada
Defina a situação da conta.
*/

let saldo = 2000
let bloqueado =  true 

if (saldo >= 1 && bloqueado === false) {
    console.log('A sua conta esta tudo certo! Pode sacar o seu dinheiro!')
}else {
    console.log('A sua conta esta Bloqueada!')
}