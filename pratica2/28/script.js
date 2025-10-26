    // Trazendo os valores 
    const nivelAgua = document.getElementById('nivel')
    const mens = document.getElementById('p')
    let atualizacao = document.getElementById('atualizacoes')

    function Condicoes() {

        // Condicoes para os niveis
        if (indice >= 0 && indice < 30) {
            mens.innerText = ('Caixa quase vazia!')

        }else if (indice >= 30 && indice < 70) {
            mens.innerText = ('Nível estável.')

        }else if (indice >= 70 && indice < 100 ) {
            mens.innerText = ('Caixa cheia!')

        }else if (indice >= 100 ) {
            mens.innerText = ('⚠️ Transbordando!')
        }

        // Se indice for menor que 0 
        if (indice < 0 ) {
            indice = 0
        }

        // Se o indice for maior que 120
       if (indice === 120 ) {
        indice = 100
       }
    }

    // Esse adiciona 1% do Nivel
    indice = 0
    function encherTanque() {
        indice++
        nivelAgua.innerText = (`Nivel ${indice} %`)
       Condicoes()
    }

    // Esse diminui 1% do nivel 
    function esvaziarTanque() {
        nivelAgua.innerText = (`Nivel ${indice} %`)
        indice--
        Condicoes()
    }