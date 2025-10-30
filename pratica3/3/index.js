
    let r = document.getElementById('resultado')
    let t = document.getElementById('texto')

    // Parte de ajustes 
    function ajustes() {
        // Parte de quando for menos que 0 e a parte quando chegar no 100
        if (indice <  0 ) {
            indice = 0   
        }else if (indice > 100) {
            indice = 100
        }

        // Cores que mudam conforme a bateria
        
       
    }


    // Função de carregar 
    indice = 0 
    function Carregar() {
        indice++
         ajustes()
        r.innerText = (`🔋 Bateria: ${indice}%`)

            // Parte de texto, Ex: Carregando ⚡ etc.
             if (indice == 100 ) {
                t.innerText = ('Bateria cheia ✅') 
            }else {
                t.innerText = ('Carregando ⚡')
            }

        }
            
           


    // Função de usar a 'bateria'
    function Usar() {
        tempo = setInterval(function(){
            indice--
            ajustes()
            r.innerText = (`🔋 Bateria: ${indice}%`)

            // Função de usar a 'bateria'
            if (indice <= 5 ) {
            t.innerText = ('Bateria fraca ❌')
            }else {
            t.innerText = ('Descarregando 🔻')
            }

    }, 1000)
     
}


    // Parte de parar 
    function Parar() {
        clearInterval(tempo)
        ajustes()
    }