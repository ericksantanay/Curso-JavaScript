
    let data = new Date()
    let h = document.getElementById('hora')
    let m = document.getElementById('minuto')
    let s = document.getElementById('segundos')

    setInterval(function(){
        //HORA
        let hora = data.getHours()
        h.innerText = (hora)


    }, 1000)