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
            contador2 = 0
            res2.innerText = ('⚠️ Produto esgotado!')
        }
    }

    //


    // FUNÇÃO 3  ADICIONAR 
    let res3 = document.getElementById('unicamisa')
    contador3 = 10
    function aumentar3() {
    res3.innerText = (`Unidades ${contador3}`)
    contador3++
    }

    // FUNÇÃO 3 DIMINUIR
        contador3 = 9
    function diminuir3() {
        res3.innerText = (`Unidades ${contador3}`)
        contador3--

        if (contador3 == -1) {
            contador3 = 0
            res3.innerText = ('⚠️ Produto esgotado!')
        }
    }



