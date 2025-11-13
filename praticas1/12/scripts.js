
var contador = 0
var r = document.getElementById('res')

function adiciona(){
    contador++;
    r.innerText = (contador)
}

function diminui(){
    contador--;
    r.innerText = (contador)
}