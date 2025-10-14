
    
    function iniciar() {
    setInterval(function(){
        contador = 0
        contador++
        r.innerText = contador
        const r = document.getElementById('res')
    }, 1000)
}