    indice = [0]
    const r = document.getElementById('res')

    const palavras = [
         "Ola",
          "Fusca",
           "Preto",
            "Marrom",
             "Mouse",
              "Teclado",
               "Monitor",
                "Pc",
                 "Carro",
                  "Moto",
                   "Carro",
                    "Cavalo",
                     
]

    setInterval(function(){
        r.innerText = (`${palavras[indice]}`)
        indice++

        if (indice == 12) {
            indice = 0
        }
}, 1000)