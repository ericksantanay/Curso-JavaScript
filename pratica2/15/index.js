
    
    function iniciar() {
    contador = 0
    setInterval(function(){
        
        contador++
        r.innerText = contador
        const r = document.getElementById('res')
    }, 1000)
}