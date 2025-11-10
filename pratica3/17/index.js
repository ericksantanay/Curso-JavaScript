
    let foto = document.getElementById('foto')

    // ARRAY COM AS FOTOS
    let fotos = ["foto1.jpg", "foto2.png"]

    indice = 0
    function MudarImagem() {

        
       
    }

     setInterval(function(){
            indice++

        if (indice >= fotos.length) {
            indice = 0
        }

        foto.src = (fotos[indice])
        }, 5000)