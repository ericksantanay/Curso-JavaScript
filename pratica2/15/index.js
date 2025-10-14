    contador = 0
    function iniciar() {

    setInterval(function(){
        const r = document.getElementById('res')
        r.innerText = (`${contador}`)
        contador++

        if (contador == 60) {
            r.innerText = (`${contador}, ${contador}`)
        }
    }, 1000)
}
