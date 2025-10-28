
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
        ifEelse()
        }, 2000)
        
        
    }

    // Função, ajustes 
    function ifEelse() {
        // Parte de mudar as cores e voltar para o inicio de novo
        if (indice >= cores.length) {
            indice = 0
        }
    }


