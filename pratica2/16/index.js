
    setInterval(function(){
        const h = document.getElementById('ho')
        const m = document.getElementById('min')
        const s = document.getElementById('sec')
        let data = new Date()
//---------------------------------------------------
        let hora = data.getHours()
        let minuto = data.getMinutes()
        let segundo = data.getSeconds()
        h.innerText = (hora)
        m.innerText = (minuto)
        s.innerText = (segundo)
    }, 1000)