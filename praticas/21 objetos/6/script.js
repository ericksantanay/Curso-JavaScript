var banco = {
    titular: "Maria Santos",
    saldo: 20000,

    depositar: function() {
        console.log('Eu quero depositar R$1000')
        saldo = 21000
    },

    saldos: function() {
        console.log('21000')
    },

    sacarValor: function() {
        console.log('Eu quero sacar R$ 3.000')
        saldo = 18000
    },

    verSaldoFinal: function() {
        console.log('Seu Saldo Final é de 18000' )
    }
}

console.log(banco.titular)
console.log(banco.saldo)
banco.depositar()
banco.saldos()
banco.sacarValor()
banco.verSaldoFinal()