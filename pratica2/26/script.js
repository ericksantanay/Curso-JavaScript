      const restotal = document.getElementById('resultadorDeVotos')
    // Voto 1
    contador1 = 0
    function pao1() {
        let res1 = document.getElementById('resultado1')
        contador1++
        res1.innerText = (`Votos ${contador1}`)
        

        if (contador1 > 30) {
            res1.innerText = (`Votos 30`)
            restotal.innerText = (`O GANHADOR FOI O PÃO FRANCÊS COM ${contador1} VOTOS`)
        }
    }



// Voto 2
    contador2 = 0
    function pao2() {
        let res2 = document.getElementById('resultado2')
        contador2++
        res2.innerText = (`Votos ${contador2}`)
        

        if (contador2 > 30) {
            res2.innerText = (`Votos 30`)
             restotal.innerText = (`O GANHADOR FOI O PÃO DE QUEIJO COM ${contador2} VOTOS`)
        }
    }


// Voto 3
    contador3 = 0
    function pao3() {
        let res3 = document.getElementById('resultado3')
        contador3++
        res3.innerText = (`Votos ${contador3}`)
        

        if (contador3 > 30) {
            res3.innerText = (`Votos 30`)
            restotal.innerText = (`O GANHADOR FOI O PÃO DOCE COM ${contador3} VOTOS`)
        }
    }
