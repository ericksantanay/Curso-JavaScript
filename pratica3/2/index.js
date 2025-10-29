    const  t = document.getElementById('temperatura')
    let estado = document.getElementById('ambiente')


    // Função com ajustes 
    function ajustes() {
        // Parte se o indice for menor que 0 
        if (indice < 0  ) {
            indice = 0
        }
    }

    // Aumentar Temperatura 
    indice = 0 
    function aumentarTemperatura() {
        indice++
        t.innerHTML = (` Temperatura ${indice}°C`)
       
    }


    // Diminuir Temperatura
    function diminuirTemperatura() {
        indice--
        ajustes()
        t.innerHTML = (`Temperatura ${indice}°C`)
    }

