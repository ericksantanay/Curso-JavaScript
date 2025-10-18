    // Saudação quando entra no site  e Cores
    const saudacao = document.getElementById('saudacao')
    let diaHoje = new Date().getHours()
    if (diaHoje >= 5 && diaHoje < 12 ) {
        saudacao.innerText = ('Bom dia!')
        document.body.style.color = 'white'
        document.body.style.backgroundColor = 'rgba(227, 230, 5, 0.855)'
    }else if (diaHoje >= 12 && diaHoje < 18) {
        saudacao.innerText = ('Boa tarde!')
        document.body.style.color = 'white'
        document.body.style.backgroundColor = 'rgb(199, 104, 9)'
    }else {
        saudacao.innerText = ('Boa noite!')
        document.body.style.color = 'white'
        document.body.style.backgroundColor = 'rgb(4, 4, 96)'
    }

    // RELOGIO
    setInterval(function(){
    let dia = new Date()
    let h = document.getElementById('hora')
    let m = document.getElementById('min')
    let s = document.getElementById('seg')
    
    // HORAS
    let hora = dia.getHours()
    h.innerText = String(hora).padStart(2, '0')

    // MINUTOS
    let minuto = dia.getMinutes()
    m.innerText = String(minuto).padStart(2, '0')
    
    // SEGUNDOS 
    let segundos = dia.getSeconds()
    s.innerText = String(segundos).padStart(2, '0')
}, 1000)

    // DATA
    let dataHoje = new Date()
    let dataMensaguem = document.getElementById('data')
    let Data = dataHoje.getDate()
    let mes = dataHoje.getMonth()+1
    let ano = dataHoje.getFullYear()
    dataMensaguem.innerText = (`Hoje é dia ${Data} do mes ${mes} do ano de ${ano}`)

    // MENSAGUEM
    indice = 0
    function MudarMensaguem() {
    let palavra = ["Foco, força e código!", "O erro é só uma oportunidade disfarçada.", "O impossível só dura até alguém resolver.", "Você não é burro está apenas aprendendo algo novo.", "Um bom programador não desiste, ele depura!"]
    
    indice++
    const frases = document.getElementById('frases')
    frases.innerText = (palavra[indice])

    if (indice >= palavra.length) {
        indice = 0
    }

}