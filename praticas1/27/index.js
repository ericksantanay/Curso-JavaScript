function verif() {
    // Variaveis como o input e o paragrafo que vai sair o resultado
    let ip = Number(document.getElementById('isenha').value)
    let r = document.getElementById('res')

    // Variavel com a senha que eu escolhi
    const senha = 8
    // if e else-if
    if (ip > 8) {
        r.innerText = ('ERROU, NÚMERO É MENOR')
    }else if (ip < 8 ) {
        r.innerText = ('ERROU, O NÚMERO É MAIOR')
    }else if (ip === senha) {
        r.innerText = ('PARABÉNS VOCE ACERTOU')
    }
}