
    

    function Resultado() {
        // CHAMANDO OS INPUTS 
        let r = document.querySelector('.resposta')
        let sim = document.getElementById('isim').value
        let nao = document.getElementById('inao').value
        let sintoma = document.getElementById('itext').value

        
        if (sintoma == '') {
            alert('PREENCHA O CAMPO ABAIXO')
        }

        if (Resultado == sim){
           r.innerHTML = (`Voce ${sim} esta bem e o seu sintoma é ${sintoma}, voce precisa tomar dipirona`)
        }else if (nao == nao){
            r.innerHTML = (`Voce ${nao} esta bem e o seu sintoma é ${sintoma}, voce precisa tomar dipirona`)
        }

    }