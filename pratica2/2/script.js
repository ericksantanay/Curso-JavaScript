function verificar() {

    let ip = document.getElementById('itext').value
    let r = document.getElementById('res')
    const c = 'Brasília'
    ip = ip.toLowerCase()
    
    if (ip == c ) {
         r.innerText = ('Acertou Parabéns')
    }else if (ip == '') {
       r.innerText = ('[ERRO] Digite algo')
    }else {
        r.innerText = ('[ERROU], Tente novamente ')
    }
}