// Saidas
let h = document.getElementById('horas')
let m = document.getElementById('minutos')
let s = document.getElementById('segundos')

// Para atualizar a cada 1s 
setInterval(function(){
    let dia = new Date()
    // hora
    let hora = dia.getHours()
    h.innerHTML = `${hora}:`

    // Minutos
    let minutos = dia.getMinutes()
    m.innerHTML = `${minutos}:`

    // Segundos
    let segundos = dia.getSeconds()
    s.innerText = (segundos)+2
}, 1000)
