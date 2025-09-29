var r = document.getElementById('palavra')

let palavras = ["Bonito", "Lindo", "Perfeito", "Agradavel", "Abençoado"];

let indice = 0;

setInterval(() => {
    r.innerText = palavras[indice];
}, 1000)