function analisar() {
    var ip = Number(document.getElementById('iida').value)
    let r = document.getElementById('res')

    if (ip >= 1 && ip < 12) {
        r.innerText = (`Voce é criança, não pode entrar!`)
    }else if (ip >= 12 && ip < 17) {
        r.innerText = (`Voce é adolescente, pode entrar acompanhado!`)
    }else if (ip >= 18 ) {
        r.innerText = (`Voce é adulto, pode entrar na festa!`)
    }else {
        alert('[ERRO] Digite uma idade!')
    }
}