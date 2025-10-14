
    contador = 0
    function iniciar() {
    setInterval(function(){
        
        contador++
        r.innerText = (`${contador}`)
        const r = document.getElementById('res')
    }, 1000)
}