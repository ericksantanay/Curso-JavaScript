     contador = 0
    function iniciartempo() {
    tempo = setInterval(function() {
        const r = document.getElementById('res')
       contador++
        r.innerText = contador
    }, 1000)
}

function pararTempo() {
    clearInterval(tempo)
}