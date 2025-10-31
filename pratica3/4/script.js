
    let r = document.getElementById('humidade')
    let estado = document.getElementById('estado')


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

        // Essa é a parte de cada estado do solo 
        if (indice >= 0 && indice < 30) {
            estado.innerText = (' Solo seco! Ligue a irrigação! 🌵')
            document.body.style.backgroundColor = 'brown'
        }else if (indice >= 30  && indice < 70 ) {
            estado.innerText = ('Umidade ideal 🌿')
            document.body.style.backgroundColor = 'green'
        }else if (indice >= 70 ) {
            estado.innerText = (' Solo encharcado! Desligue a irrigação! 💧')
            document.body.style.backgroundColor = 'blue'
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