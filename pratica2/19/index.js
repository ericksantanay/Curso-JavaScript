setInterval(function(){
    let data = new Date()

    let h = document.getElementById('hora')
    let hora = data.getHours()
    h.innerText = (hora)

    let m = document.getElementById('min')
    let minutos = data.getMinutes()
    m.innerText = (minutos)


}, 1000)