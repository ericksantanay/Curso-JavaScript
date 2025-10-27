    let verm = document.getElementById('semaforo-verm')

    let a = document.getElementById('semanforo-amar')

    let ver = document.getElementById('semaforo-verde')

    let corInicial = 'black'
    let vermelho = 'red'


    function mudarCorAutomatico() {
        
        setInterval(function(){
        if (verm.style.backgroundColor  !== 'red') {
        verm.style.backgroundColor  = 'red'
        }else if (verm.style.backgroundColor  !== 'black') {
        verm.style.backgroundColor  = 'black'
        }
    }, 1000)
}