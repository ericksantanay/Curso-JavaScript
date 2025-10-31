
    let r = document.getElementById('humidade')
    

    // Função de regar 
    indice = 50
    function regar() {
        setInterval(function(){
            indice++
            r.innerText = (`Humidade: ${indice}%`)
        }, 1000)
    }