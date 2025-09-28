function analisar() {
    var ip = Number(document.getElementById('iida').value)
    let r = document.getElementById('res')

    if (ip >= 1 && ip < 12) {
        r.innerText = (`Voce tem ${ip} anos e é criança, não pode entrar!`)
    }else if (ip >= 12 && ip < 17) {
        r.innerText = (`Voce tem ${ip} anos e voce é adolescente, pode entrar acompanhado!`)
    }else if (ip >= 18 ) {
        r.innerText = (`Voce tem ${ip} anos e é adulto, pode entrar na festa!`)
    }else {
        alert('[ERRO] Digite uma idade!')
    }
}