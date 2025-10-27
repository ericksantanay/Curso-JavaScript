
    let vermelho = document.getElementById('semaforo-verm').style.backgroundColor = 'red'

    let amarelo = document.getElementById('semanforo-amar').style.backgroundColor = 'yellow'

    let verde = document.getElementById('semaforo-verde').style.backgroundColor = 'green'

    function MudaCorAutomatico() {
        

        setInterval(function(){
        
            if (vermelho == 'black') {
                vermelho = 'red'
            }

            if (amarelo == 'black') {
                amarelo = 'yellow'
            }

            if (verde == 'black') {
                verde = 'green'
            }
           
        }, 1000)

    }