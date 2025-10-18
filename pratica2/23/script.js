    const saudacao = document.getElementById('saudacao')
    if (hora >= 5 && hora < 12 ) {
        saudacao.innerText = ('Bom dia!')
    }else if (hora >= 12 && hora < 18) {
        saudacao.innerText = ('Boa tarde!')
    }else {
        saudacao.innerText = ('Boa noite!')
    }



    // RELOGIO
    setInterval(function(){
    let dia = new Date()
    let h = document.getElementById('hora')
    let m = document.getElementById('min')
    let s = document.getElementById('seg')
    
    // HORAS
    let hora = dia.getHours()
    h.innerText = (hora)

    // MINUTOS
    let minuto = dia.getMinutes()
    m.innerText = (minuto)
    
    // SEGUNDOS 
    let segundos = dia.getSeconds()
    s.innerText = (segundos)
}, 1000)