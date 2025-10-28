
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
        }, 1000)
        
         
    }

    // Parte de funcoes para nao precisar repetir codigo
    function ifEelse() {

         if (indice >= cores.length) {
            indice = 0
            }
    }

    // Parte de parar o contador 
    function Parar() {
        clearTimeout(Tempo)
    }
