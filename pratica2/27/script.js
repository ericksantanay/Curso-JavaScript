    const temp = document.getElementById('temperatura')

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
