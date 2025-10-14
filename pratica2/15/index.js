
    contador = 0
    function iniciar() {
    setInterval(function(){
        r.innerText = (`${contador}`)
        const r = document.getElementById('res')
        contador++
        
        
    }, 1000)
}