function verificar() {
    var ip = Number(document.getElementById('iidade').value)
    var r = document.getElementById('res')

    if (ip >= 0 && ip < 12) {
        r.innerText = (`Voce tem ${ip} anos e voce ainda é criança! `)
    }else if (ip >= 12 && ip < 18) {
        r.innerText = (`Voce tem ${ip} anos e voce já é adolecente! `)
    }else if (ip >= 18 && ip < 60) {
        r.innerText = (`Voce tem ${ip} anos e voce é adulto(a)!!`)
    }else if (ip >= 60 && ip < 110) {
        r.innerText = (`Voce tem ${ip} e voce é idoso(a)`)
    }else if (ip > 110) {
        alert('[ERRO] Tente novamente mais tarde ')
    }
}