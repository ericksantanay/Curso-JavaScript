// Saida 
const r = document.getElementById('res')

let nomes = ["Erick", "Leandro", "Mateus", "Breno", "Bruno", "Bernardo", "Vinicius", "Layssa", "Larissa", "Lays", "Paulo"]

indice = 0
setInterval(function(){

    r.innerHTML = (indice[nomes])
    indice++

}, 1000)