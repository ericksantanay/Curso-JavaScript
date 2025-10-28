
    const lampada = document.getElementById('lampada')
    const tempo = document.getElementById('tempoLigado')
    let sensor = document.getElementById('sensor')
    const cores = ["yellow", "orange", "blue"]
    // Função automatico
    indice = 0
    function Automatico() {
       
        setInterval(function(){
        
        lampada.style.backgroundColor = (cores[indice])
        indice++
        }, 2000)
        
        ifEelse()
    }

    // Função, ajustes 

    function ifEelse() {
        if (indice >= cores.length) {
            indice = 0
        }
    }