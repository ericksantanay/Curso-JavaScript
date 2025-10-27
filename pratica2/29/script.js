
    let verm = document.getElementById('semaforo-verm')

    let a = document.getElementById('semanforo-amar')

    let ver = document.getElementById('semaforo-verde')

    let vermelho = ["red"]
    let amarelo = ["yellow"]
    let verde = ["green"]

    indice = 0
    function MudaCorAutomatico() {
        

        setInterval(function(){
            verm.style.backgroundColor = (vermelho[indice])
          
           a.style.backgroundColor = (amarelo[indice])

           ver.style.backgroundColor = (verde[indice])
            indice++
        }, 1000)

    }