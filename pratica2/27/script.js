    const temp = document.getElementById('temperatura')
    const forn = document.getElementById('forno')
    
    indice = 0
    function aumentarTemp() {
        indice++
        temp.innerText = (`A TEMPERATURA É ${indice} GRAUS`)
    }


    function diminuirTemp() {
        indice--
        temp.innerText = (`A TEMPERATURA É ${indice} GRAUS`)
    }

    if (indice < 100) {
        
    }
