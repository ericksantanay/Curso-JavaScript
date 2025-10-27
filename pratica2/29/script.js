
    let vermelho = document.getElementById('semaforo-verm').style.backgroundColor = 'red'

    let amarelo = document.getElementById('semanforo-amar').style.backgroundColor = 'yellow'

    let verde = document.getElementById('semaforo-verde').style.backgroundColor = 'green'

    indice = 0
    function MudaCorAutomatico() {
        

        setInterval(function(){
        

            if (vermelho !== 'black') {
                vermelho = 'black'
            }
           indice++
           
        }, 1000)

    }