
    
    


    function Resultado() {
        // CHAMANDO OS INPUTS 
        let sim = document.getElementById('isim')
        let nao = document.getElementById('inao')
        let r = document.querySelector('.resposta')
        let sintoma = document.getElementById('itext').value
        
        if (sintoma == '') {
            alert('PREENCHA O CAMPO ABAIXO')
            return
        }

        if (sim.checked){
            document.body.style.color = 'white'
           r.innerHTML = (`Voce esta bem e o seu sintoma é ${sintoma}, voce vai <strong>morrer</strong>`)
           
        }else if (nao.checked){
            document.body.style.color = 'white'
            r.innerHTML = (`Voce não esta bem e o seu sintoma é ${sintoma}, toma dipirona que cura!`)
            
        }

        

    }

    sintoma = ''