    indice = 0
    setInterval(function(){
    const r = document.getElementById('res')

    let nomes = [,"ARTHUR", "EU", "TE", "AMO", "VOCE", "É", "A", "MINHA", "PAIXAO", "UM", "BEIJO", "NO", "TRASEIRO"]

    indice++

    r.innerText = (nomes[indice])
    if (indice == 14) {
        indice = 0
    }


}, 1000)