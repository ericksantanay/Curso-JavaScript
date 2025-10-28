function Senha() {
    var sen = 28922
    var ip = Number(document.getElementById('isenha').value)
    var r = document.getElementById('res')

    if (ip === sen) {
        r.innerText = ('Parabéns a senha esta correta!!!')
    }else {
        r.innerText = ('Senha Incorreta, Tente novamente')
        
    }
}