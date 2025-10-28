var click = 0
var r = document.getElementById('res')

function clicou() {
    click++;
    r.innerText = (`Você clicou ${click} vezes`)
}