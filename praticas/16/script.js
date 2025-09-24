function verifica() {
    var ip = Number(document.getElementById('isenha').value)
    var r = document.getElementById('res')
    var senha = 1234

    if (ip == senha) {
        r.innerText = ('Parabéns voce acertou a senha')
    }else {
        r.innerText = ('Voce errou!!!')
    }
}

