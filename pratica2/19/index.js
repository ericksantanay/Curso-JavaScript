setInterval(function(){
    let data = new Date()

    let h = document.getElementById('hora')
    let hora = data.getHours()
    h.innerText = (hora)


}, 1000)