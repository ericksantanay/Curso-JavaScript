
    
    let h = document.getElementById('hora')
    let m = document.getElementById('minuto')
    let s = document.getElementById('segundos')

    setInterval(function(){

        //DATA ATUAL
        let data = new Date()

        //HORA
        let hora = data.getHours()
        h.innerText = (hora)

        // MINUTOS
        let minutos = data.getMinutes()
        m.innerText = (minutos)

        // SEGUNDOS
        let segundos = data.getSeconds()
        s.innerText = (segundos)+0

    }, 1000)