// Saida 
const r = document.getElementById('res')

let nome = ["Erick", "Leandro", "Mateus", "Breno", "Bruno", "Bernardo", "Vinicius", "Layssa", "Larissa", "Lays", "Paulo"]

indice = 0
setInterval(function(){
    r.innerHTML = (nome[indice])
    indice++

    if (indice === nome.length) {
        indice = 0 
    }
}, 1000)

