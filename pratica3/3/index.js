
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
        
    }



    // Parte de parar 
    function Parar() {
        
    }