// CONTADOR 1, PARTE QUE ADICIONA
    let res1 = document.getElementById('unitenis')
    contador1 = 11
function aumentar1() {
    res1.innerText = (`Unidades ${contador1}`)
    contador1++
}


// CONTADOR 1, PARTE QUE DIMINUI 
    contador1 = 9
    function diminuir1() {
    res1.innerText = (`Unidades ${contador1}`)
    contador1--

    if (contador1 == -1 ) {
        contador1 = 0
        res1.innerText = ('⚠️ Produto esgotado!')
    } 
}


// FUNÇÃO 2  ADICIONAR 
    let res2 = document.getElementById('unicalca')
    contador2 = 10
    function aumentar2() {
    res2.innerText = (`Unidades ${contador2}`)
    contador2++
    }

    // FUNÇÃO 2 DIMINUIR
        contador2 = 9
    function diminuir2() {
        res2.innerText = (`Unidades ${contador2}`)
        contador2--

        if (contador2 == -1) {
            contador = 0
            res2.innerText = ('⚠️ Produto esgotado!')
        }
    }
