    indice = [0]
    let r = document.getElementById('res')

    const palavras = ["Brasil", "Argentina", "Chile", "Uruguai", "Paraguai", "Peru", "Colômbia", "México", "Canadá", "Estados Unidos", "Espanha", "Portugal", "França", "Itália", "Alemanha", "Japão", "China", "Coreia do Sul", "Austrália", "África do Sul"]
    

    setInterval(function(){
        r.innerText = (`${palavras[indice]}`)
        indice++
//--------------------------------------------
        if (indice == 20) {
            indice = 0
        }
}, 1000)