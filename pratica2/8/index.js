    indice = 0
    const cores = ["blue", "yellow", "green", "brown", "red", "black", "pink", "purple", "lime"]

    setInterval(function(){
        document.body.style.backgroundColor = (`${cores[indice]}`)
        indice++

        if (indice == 8) {
            indice = 0
        }
    }, 1000)