
    const nivelAgua = document.getElementById('nivel')
    const mens = document.getElementById('p')
    function Condicoes() {
        
        if (indice >= 0 && indice < 30) {
            mens.innerText = ('Caixa quase vazia!')

        }else if (indice >= 30 || indice < 70) {
            mens.innerText = ('Nível estável.')

        }else if (indice >= 70 && indice < 100 ) {
            mens.innerText = ('Caixa cheia!')

        }else if (indice >= 100 ) {
            mens.innerText = ('⚠️ Transbordando!')
        }
    }

    indice = 0
    function encherTanque() {
        indice++
        nivelAgua.innerText = (`Nivel ${indice} %`)
       Condicoes()
    }