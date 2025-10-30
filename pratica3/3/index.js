
    let r = document.getElementById('resultado')

    // Parte de ajustes 
    function ajustes() {

        if (indice < 0 ) {
            indice = 0
        }
    }

    // Função de carregar 
    indice = 0 
    function Carregar() {
        indice++
        r.innerText = (`🔋 Bateria: ${indice}%`)
        ajustes()
    }

    function Usar() {
        tempo = setInterval(function(){
            indice--
            r.innerText = (`🔋 Bateria: ${indice}%`)
        }, 1000)
    }



    // Parte de parar 
    function Parar() {
        clearInterval()
    }