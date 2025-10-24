// CONTADOR 1, PARTE QUE ADICIONA
    let res1 = document.getElementById('unitenis')
    contador1 = 10
function aumentar1() {
    res1.innerText = (`Unidades ${contador1}`)
    contador1++
}


// CONTADOR 1, PARTE QUE DIMINUI 
    contador1 = 10
    function diminuir1() {
    res1.innerText = (`Unidades ${contador1}`)
    contador1--

    if (contador1 === 0 ) {
        document.body.res1.style.body = 'red'
    } 
}