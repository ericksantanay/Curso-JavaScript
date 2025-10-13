contador = 0
function Clicou() {
    const r = document.getElementById('res')
    
    contador++
    r.innerText = (`${contador}`)
}