
    let r = document.getElementById('humidade')

    // Essa é uma função que ajusta ex: se for menor que 0 
    function ajustes() {
        // Se for menor que 0
        if (indice < 0 ) {
            indice = 0
        }

        //Essa é se o indice for maior que 100
        if (indice >= 100) {
            indice = 100
        }

    }

    // Função de regar 
    indice = 50
    function regar() {
        tempo = setInterval(function(){
            indice++
            ajustes()
            r.innerText = (`Humidade: ${indice}%`)
        }, 1000)
    }


    function secar() {
        tempo = setInterval(function(){
            indice--
            ajustes()
            r.innerText = (`Humidade: ${indice}%`)
        }, 1000)
    }

    function parar() {
        clearInterval(tempo)
    }