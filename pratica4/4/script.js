// Saidas
let h = document.getElementById('horas')
let m = document.getElementById('minutos')
let s = document.getElementById('segundos')

// Para atualizar a cada 1s 
setInterval(function(){
    let dia = new Date()
    // hora
    let hora = String(dia.getHours()).padStart(2, '0')
    h.innerHTML = `${hora}:`

    // Minutos
    let minutos = String(dia.getMinutes()).padStart(2, '0')
    m.innerHTML = `${minutos}:`

    // Segundos
    let segundos = String(dia.getSeconds()).padStart(2, '0')
    s.innerText = (segundos)
}, 1000)
