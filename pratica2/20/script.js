    indice = 0
    function gerarPalavra() {
    let palavras =  ["Hoje é um bom dia para aprender algo novo!",
    "A sorte sorri pra quem não desiste.",
    "Você está mais perto do sucesso do que imagina!",
    "Confie no processo e no seu código!",
    "A persistência vence o talento.",
    "Hoje é o dia de colocar suas ideias em prática!"]
    indice++

    let mensaguem = document.getElementById('mens')
    let Data = document.getElementById('res-data')
    
    if (indice == 5) {
        indice = 0
    }
    mensaguem.innerText = (palavras[indice])

    let dia = new Date()
    let dataBr = dia.toLocaleString ('pt-BR')
    Data.innerText = (dataBr)
}

setInterval(function(){
    let h = document.getElementById('hora')
    let m = document.getElementById('min')
    let s = document.getElementById('seg')

    let data = new Date()
    // Hora
    let hora = data.getHours()
    h.innerText = (hora)

    // Minutos
    let minutos = data.getMinutes()
    m.innerText = (minutos)

    // Segundos
    let segundos = data.getSeconds()
    s.innerText = (segundos)
}, 1000)