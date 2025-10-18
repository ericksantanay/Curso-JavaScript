    indice = 0
    setInterval(function(){
    const r = document.getElementById('res')

    let nomes = [
    
]

    indice++

    r.innerText = (nomes[indice])
    if (indice == 29) {
        indice = 0
    }


}, 1000)