

    let foto = document.getElementById('foto')
    let fotos = ["foto1.jpg", "foto2.png"]

    indice = 0
    function proxima() {
        indice++

        if (indice > 1) {
            indice = 0
        }

        foto.src = fotos[indice]
         
        
    }


    function anterior() {
        indice--

        if (indice < 0) {
            indice = 1
        }

        foto.src = fotos[indice]
    }