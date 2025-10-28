
    const lampada = document.getElementById('lampada')
    const tempo = document.getElementById('tempoLigado')
    let sensor = document.getElementById('sensor')
    const cores = ["yellow", "orange", "blue"]

    // Função automatico
    indice = 0
    function Automatico() {
       
        Tempo = setInterval(function(){
        lampada.style.backgroundColor = (cores[indice])
        indice++

        ifEelse()
        }, 2000)
        
         
    }

    // Parte de funcoes para nao precisar repetir codigo
    function ifEelse() {
            // Parte para voltar no inicio e ficar repetindo
         if (indice >= cores.length) {
            indice = 0
            }

            if (lampada == 'yellow') {
                sensor.innerText = ('sala está iluminada')

            }else if (lampada == 'black' ) {
                sensor.innerText = ('AAAAAAAAAAA')

            }else if (lampada == 'blue') {
                sensor.innerText = ('“luz de ambiente')
            }

    }

    // Parte de parar o contador 
    function Parar() {
        clearTimeout(Tempo)
    }


    // Parte que reinica o contador 
    function Reiniciar() {
        lampada.style.backgroundColor = 'black'
        indice = 0

    }


    // Parte de desligar
    function Desligar() {
        lampada.style.backgroundColor = 'black'
        Parar()
        ifEelse()
    }

    