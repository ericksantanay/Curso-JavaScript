    const  t = document.getElementById('temperatura')
    let estado = document.getElementById('ambiente')

    // Aumentar Temperatura 
    indice = 0 
    function aumentarTemperatura() {
        indice++
        t.innerHTML = (` Temperatura ${indice}°C`)
        
    }


    // Diminuir Temperatura
    function diminuirTemperatura() {
         indice--
        t.innerHTML = (`Temperatura ${indice}°C`)
       
    }