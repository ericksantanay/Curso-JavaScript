
// Saída
let r = document.getElementById('res')

const armazem = ["<div>oi</div>", "<div>P</div>", "<div>JHHH</div>", "<div>DDDDD</div>", "<div>DiDDDDDEEEEE</div>"]

indice = 0 
setInterval(function(){
    
    r.innerHTML = (armazem[indice])
    indice++
    if (indice == armazem.length) {
        indice = 0
    }
}, 1000)
