const nomes = ["Oi", "Bão?", "BLZ", "Joia?", "Suave", "Bom dia"]

let r = document.getElementById('res')
let indice = 0
r.innerText = (`${nomes[indice]}`)
setInterval(() => {
    indice++
}, 2000);