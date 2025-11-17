const nomes = ["GRU", "VAMOS", "CORTAR", "O", "CABELO", "AMANHA?", ",", "SE", "VOCE", "NÃO", "FOR", "EU", "NÃO", "VOU", "DEIXAR", "VOCE", "ROUBAR", "A", "LUA", "HEHEHEHEHEHEHEHEHEHEH"]

let r = document.getElementById('res')
let indice = 0
r.innerText = (`${nomes[indice]}`)
setInterval(() => {
    indice++
    if (indice >= nomes.length) {
        indice = 0}
    r.innerText = (`${nomes[indice]}`)
}, 1000);