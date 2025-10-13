    contador = 0
    function Clicou() {
    const r = document.getElementById('res')
    
    contador++
    r.innerText = (`${contador}`)

    if (contador == 100) {
        r.innerText = ('Parabens voce chegou no 100')
    }
}