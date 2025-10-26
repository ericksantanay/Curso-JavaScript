
    const nivelAgua = document.getElementById('nivel')
    const mens = document.getElementById('p')
    function Condicoes() {
        if (indice >= 0 || indice < 30) {
            mens.innerText = ('"Caixa quase vazia!')
        }
    }

    indice = 0
    function encherTanque() {
        indice++
        nivelAgua.innerText = (`Nivel ${indice} %`)
       Condicoes()
    }