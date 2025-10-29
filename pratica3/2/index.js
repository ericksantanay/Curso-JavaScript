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
        }else {
            estado.innerText = ('Muito quente! 🔥')
            document.body.style.backgroundColor = 'red'
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

    // Esse é o modo automatico
    function modoAutomatico() {
        tempo = setInterval(function(){
            ajustes()
            t.innerText = (` Temperatura ${indice}°C`)
            indice++


            // Parte automatica da temperatura
            /*let descendo = false
        if (indice === descendo) {
           indice--
            } */
        }, 1000)

    }

    function parar() {
        clearInterval(tempo)
    }

