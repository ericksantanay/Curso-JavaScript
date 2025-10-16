

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