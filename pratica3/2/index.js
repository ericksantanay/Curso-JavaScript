    const  t = document.getElementById('temperatura')
    let estado = document.getElementById('ambiente')


    // Função com ajustes 
    function ajustes() {

        // Parte de mudar o texto conforme muda a temperatura 
        if (indice < 20) {
            estado.innerText = ('Ambiente frio 🧊')
            document.body.style.backgroundColor = 'blue'

        }else if (indice >= 20 && indice < 35) {
            estado.innerText = ('Temperatura agradável ☀️')
            document.body.style.backgroundColor = 'orange'
        }



        
    }

    // Aumentar Temperatura 
    indice = 0 
    function aumentarTemperatura() {
        indice++
        t.innerHTML = (` Temperatura ${indice}°C`)
        ajustes()
    }


    // Diminuir Temperatura
    function diminuirTemperatura() {
        indice--
        ajustes()
        t.innerHTML = (`Temperatura ${indice}°C`)
    }

