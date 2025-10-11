function verificar() {

    let ip = document.getElementById('itext').value.trim().toLowerCase()
    let r = document.getElementById('res')
    const c = 'brasília'.toLowerCase()
    
    if (ip == c ) {
         r.innerText = ('Acertou Parabéns')
    }else if (ip === '') {
       r.innerText = ('[ERRO] Digite algo')
    }else {
        r.innerText = ('[ERROU], Tente novamente ')
    }
}