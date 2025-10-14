    contador = 0
    function iniciar() {

    tempo = setInterval(function(){
        const r = document.getElementById('res')
        r.innerText = (`${contador}`)
        contador++

        if (contador == 60) {
            r.innerText = (``)
        }
    }, 1000)
}

function parar() {
    clearInterval(tempo)
}
