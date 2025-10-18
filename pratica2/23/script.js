    // Saudação quando entra no site  e Cores
    const saudacao = document.getElementById('saudacao')
    if (hora >= 5 && hora < 12 ) {
        saudacao.innerText = ('Bom dia!')
        document.body.style.color = 'white'
        document.body.style.backgroundColor = 'rgba(227, 230, 5, 0.855)'
    }else if (hora >= 12 && hora < 18) {
        saudacao.innerText = ('Boa tarde!')
        document.body.style.color = 'white'
        document.body.style.backgroundColor = 'rgb(199, 104, 9)'
    }else {
        saudacao.innerText = ('Boa noite!')
        document.body.style.color = 'white'
        document.body.style.backgroundColor = 'rgb(4, 4, 96)'
    }

    const dia = new Date()
    // RELOGIO
    setInterval(function(){
    
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

    // DATA
    let dataMensaguem = document.getElementById('data')
    let Data = dia.getDate()
    let mes = dia.getMonth()+1
    let ano = dia.getFullYear()
    dataMensaguem.innerText = (`Hoje é dia ${Data} do mes ${mes} do ano de ${ano}`)

    // MENSAGUEM
    function MudarMensaguem() {
        let palavras = [
    "Foco, força e código!",
    "O erro é só uma oportunidade disfarçada.",
    "O impossível só dura até alguém resolver.",
    "Você não é burro está apenas aprendendo algo novo.",
    "Um bom programador não desiste, ele depura!"
    ]

    }