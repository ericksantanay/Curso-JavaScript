
    let cores = ["red", "blue", "green", "yellow", "pink", "bronw", "white", "orange", "purple", "grey", "maroon", "black"]

    // Troca de cores
    indice = 0
    setInterval(function(){
    document.body.style.backgroundColor = (cores[indice])
    indice++

    if (indice >= cores.length) {
        indice = 0
    }

    }, 900)