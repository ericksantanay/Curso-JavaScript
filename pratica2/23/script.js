    
    // RELOGIO QUE MOSTRA AS HORAS 
    setInterval(function(){
    let dia = new Date()
    let h = document.getElementById('hora')
    let m = document.getElementById('min')
    let s = document.getElementById('seg')

    let hora = dia.getHours()
    h.innerText = (hora)
   
}, 1000)