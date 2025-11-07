
    let graus = document.getElementById('graus')
    let r = document.querySelector('.reposta')

    //INDICE
    indice = 0  
    //FUNÇÂO
    function Subuir() {
        indice++
        graus.innerText = (`${indice}°C`)

        
        // CONDIÇÕES
        if (indice < 10 ) {
            r.innerText = ('❄️ Muito frio!')
        }else if (indice >= 10 && indice < 40) {
            r.innerText = ('🌤️ Agradável')
        }else if (indice >=  40) {
            r.innerText = ('🔥 Muito quente!')
        }

    }