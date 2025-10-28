var contador = 0
var r = document.getElementById('res')

function adicioanar() {
    contador++
    r.innerText = (`${contador}`)
}

function remover() {
    contador--
    r.innerText = (`${contador}`)
}