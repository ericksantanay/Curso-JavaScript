    contador = 0
    function iniciar() {

    tempo = setInterval(function(){
        const re = document.getElementById('resu')
        const r = document.getElementById('res')
        r.innerText = (`${contador} s`)
        contador++

        if (contador == 60) {
            r.innerText = (`${contador}`)
            re.innerText = (`${contador}`)
        }
    }, 1000)
}

function parar() {
    clearInterval(tempo)
}
