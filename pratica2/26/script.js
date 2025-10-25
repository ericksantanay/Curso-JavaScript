      const restotal = document.getElementById('resultadorDeVotos')
    // Voto 1
    contador1 = 0
    function pao1() {
        let res1 = document.getElementById('resultado1')
        res1.innerText = (`Votos ${contador1}`)
        contador1++

        if (contador1 > 20) {
            res1.innerText = (`Votos 20`)
            restotal.innerText = ('O GANHADOR FOI O PÃO FRANÇÊS')
        }
    }



// Voto 2
    contador2 = 0
    function pao2() {
        let res2 = document.getElementById('resultado2')
        res2.innerText = (`Votos ${contador2}`)
        contador2++

        if (contador2 > 20) {
            res2.innerText = (`Votos 20`)
             restotal.innerText = ('O GANHADOR FOI O PÃO DE QUEIJO')
        }
    }


// Voto 3
    contador3 = 0
    function pao3() {
        let res3 = document.getElementById('resultado3')
        res3.innerText = (`Votos ${contador3}`)
        contador3++

        if (contador3 > 20) {
            res3.innerText = (`Votos 20`)
            restotal.innerText = ('O GANHADOR FOI O Pão francês')
        }
    }

  

   


