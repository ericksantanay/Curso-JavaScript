
    const lampada = document.getElementById('lampada')
    const tempo = document.getElementById('tempoLigado')
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
        
            // Esse é se a lampada estiver apagada, se esta no amarelo, se esta no azul etc.
            if (lampada.style.backgroundColor == 'yellow') {
                sensor.innerText = ('sala está iluminada')

            }else if (lampada.style.backgroundColor == 'blue') {
                sensor.innerText = ('luz de ambiente')
            }else if (lampada.style.backgroundColor == 'black') {
                sensor.innerText = ('está escuro ')
            }else {
                sensor.innerText = ('')
            }
                

          

    }

    // Parte de parar o contador 
    function Parar() {
        clearInterval(Tempo)
    }


    // Parte que reinica o contador 
    function Reiniciar() {
        lampada.style.backgroundColor = 'black'
        indice = 0
        ifEelse()
    }


    // Parte de desligar
    function Desligar() {
        lampada.style.backgroundColor = 'black'
        Parar()
        ifEelse()
    }

    