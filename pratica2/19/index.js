setInterval(function(){
    let data = new Date()

    let h = document.getElementById('hora')
    let hora = data.getHours()
    h.innerText = (hora)

    let m = document.getElementById('min')
    let minutos = data.getMinutes()
    m.innerText = (minutos)

    let s = document.getElementById('segu')
    let segundos = data.getSeconds()
    s.innerText = (segundos)

}, 1000)