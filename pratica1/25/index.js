var r = document.getElementById('palavra')

let palavras = ["Bonito", "Lindo", "Perfeito", "Agradavel", "Abençoado", "Magnifico", "Bom", "Criado por Deus"];

let indice = 0;

setInterval(() => {
    r.innerText = palavras[indice]; // mostra a palavra atual
    indice++; // avança para a próxima

    if (indice >= palavras.length) { 
        indice = 0; //  volta pro início
    }
}, 1000)
